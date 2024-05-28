import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign , verify } from "hono/jwt";

export const middleware = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();


middleware.use('/api/v1/user/*',async(c,next)=>{
  console.log("user middleware is got hit");
  await next();
})
