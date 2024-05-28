import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { string } from 'zod';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { authenticationMiddleware } from '../middleware/authentication';
// import { SignupInput, signinInput } from '';
import { cors } from 'hono/cors';

// intialzing the cors


// it is a only way to use the env in the hono
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
	    JWT_SECRET : string
	},
	Variables: {
		UserId : String
	}
}>();


app.use('/*', cors())

// setting up the secured middleware for the selected routes ie /blog
// app.use('/api/v1/blog/*',async (c,next)=>{
//     console.log("middleware got hit");  
//     const token = c.req.header('Authorization');
//      try 
// 	 {
// 		if(!token) 
// 		{
// 			c.status(400);
// 			return c.json({msg:"error unauthorized , empty token is sent signin ocnce agian"});
// 		}
// 		const jwt = token.split(' ')[1];
// 		const payload = await verify(jwt,c.env.JWT_SECRET);

// 		if(!payload)
// 		{
// 			c.status(400);
// 			return c.json({msg:"error unauthorized , token is expired or invalid"});
// 		}
// 		console.log("UserId",payload.UserId);
// 	    c.set("UserId", payload.UserId);
// 		await next();
//     } 
// 	catch (error) 
// 	{
// 		return c.json({
// 			msg : "Authentication is failed",
// 		});
// 	}
// });

app.use('/api/v1/blog/*', authenticationMiddleware);
app.route('/api/v1/user/', userRouter);
app.route('/api/v1/blog/', blogRouter);

export default app;




