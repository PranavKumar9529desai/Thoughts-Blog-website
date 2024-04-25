import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from 'axios';
import { Loader } from "@/components/loader"


export   function SignUp() {
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [isLoading , setLoading] = useState(false);

    async function  CreateUser(email,password){
        try {
            setLoading(true)
            const payload = {
                username : email ,
                password : password
            }
           const response = await axios.post('https://my-app.fullstackwebdeveloper123.workers.dev/api/v1/user/signup',payload);
           const data = await response.data;
        //    const result = await response.json();
           console.log(data);  
        } catch (error) {
           console.log(error); 
        }
        finally {
          setLoading(false);
        }
        
    }
    
    function validate(){
        const Email = userName ;
        const Password = password ;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
        if (!emailRegex.test(Email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        if (!passwordRegex.test(password)) {
            alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }
        
        // call the user create function 
        CreateUser(Email,Password);

    }

    return ( 
    <div className="flex justify-center items-center w-full h-screen bg-customGray">
        { isLoading ? <Loader /> : 
    <Card className="mx-auto max-w-md h-96">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold flex justify-center items-center mb-5">SignUp</CardTitle>
        <CardDescription>Enter your email and password to create to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" 
            onChange={(e)=>{
                const result = e.target.value;
                console.log(result);
                setUserName(result);
            }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" 
            onChange={(e)=>{
                const result = e.target.value;
                console.log(result);
                setPassword(result);
            }} />
          </div>
          <Button className="w-full" type="submit" 
           onClick={()=>{validate()}}>
            create account
          </Button >
        </div>
      </CardContent>
    </Card>
    }
    </div>
    )
    }