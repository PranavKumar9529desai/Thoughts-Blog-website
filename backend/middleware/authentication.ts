import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign , verify } from "hono/jwt";
import app from "../src";
import { Context, Next } from "hono";

export const middleware = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();


// middleware for authentication
export async function authenticationMiddleware(c: Context, next: Next) {
    const token = c.req.header('Authorization');
    try {
        if(!token) {
            c.status(400);
            return c.json({msg:"error unauthorized , empty token is sent signin once again"});
        }
        const jwt = token.split(' ')[1];
        
        const payload = await verify(jwt, c.env.JWT_SECRET);

        if(!payload) {
            c.status(400);
            return c.json({msg:"error unauthorized , token is expired or invalid"});
        }
        console.log("UserId", payload.UserId);
        c.set("UserId", payload.UserId);
        await next();
    } catch (error) {
        return c.json({
            msg : "Authentication is failed",
        });
    }
}
