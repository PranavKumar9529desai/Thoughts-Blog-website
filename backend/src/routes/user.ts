import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { env } from "hono/adapter";
import {z, ZodError} from 'zod';
// @ts-ignore
// TODO remove ts-ignote as you find the types
import { signinInput , SignupInput  } from "../../node_modules/common_for_medium_blog_project/dist/index.js";
// initaialing the userRouter  
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
        },
    Variables: {
          UserId : String
        }
}>();

// function to hash the password
async function Hashpassword(password : string){
    const myText = new TextEncoder().encode(password);
    const myDigest = await crypto.subtle.digest(
      {
        name: 'SHA-256',
      },
      myText // The data you want to hash as an ArrayBuffer
    );
    // convert the array.buffer into the string
    return Array.from(new Uint8Array(myDigest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

userRouter.post('/signup',async(c)=>{
    console.log("got hit to the route signup");
    console.log(c.env.JWT_SECRET);
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await  c.req.json();
    console.log("body",body);
   
    
    try {
    //   console.log("signnin",SignupInput);
    // const result = SignupInput.safaeparse(body);
    //   console.log("result is ",result);
    //   if (!result.success) 
    //     {
    //       const errorMessage = await result.error.errors[0].message ;
    //       c.status(500);
    //       return c.json({
    //          success : false ,
    //          msg : errorMessage
    //         })
    //     }
    //     console.log(body);
      // we need to loop over the ZodError because the ZodError are like that given below it is array of objects 
       const user = await prisma.user.create
       ({
          data : 
          {
            email : body.email ,
            password : await Hashpassword(body.password),
            name : body.username ,
          }
       });
        console.log(user);       
   
        const payload = 
        {
          UserId : user.id 
        }

        const jwt = await sign(payload,c.env.JWT_SECRET);
        c.status(200);
        // send a jwt 
        return c.json
          ({
            msg : "success",
            token : jwt ,
            UserName : user.name,
          })
  
    } catch (error) 
    {
      console.log("error",error);
        c.status(500);
        return c.json
        ({
          msg : "User already Exist !!"
        });
    }
});
  
userRouter.post('/signin',async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const userEmail =  body.email;
    const userPasword = body.password;
    try 
    {
        const result = signinInput.safeParse(body);
        console.log(result); 
        if(!result.success){
          c.status(500);
          const errorMessage = result.error.errors[0].message;
          return c.json({
            succes : false ,
            message : errorMessage, 
          });
        }
        const user  = await prisma.user.findUnique
        ({
            where : { email : userEmail}
        });

        if(!user) 
          {
            c.status(500);
            return c.json({msg : "User doesn't exist"});
          }

        if(!(user.password === await Hashpassword(userPasword)))
          {
            c.status(500);
            return c.json({msg : "wrong password"})
          }

        // sign jwt
        const payload = 
        {
            UserId : user.id
        }

        const jwt = await sign(payload,c.env.JWT_SECRET);
        c.status(200);
        return c.json({msg : "success",token:jwt , "UserName" : user.name });
    } catch (error) 
      {
        return c.json
        ({
          msg : "unexpected error occured",
          error:error
        });
      }
});

userRouter.get("/allUser",async (c)=>{
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const allUsers = await prisma.user.findMany();
    
    c.status(200);
    return c.json(allUsers);
  } catch (error) {
    c.status(500);
     return  c.json({ error: 'An error occurred while retrieving users' });
  }
});


