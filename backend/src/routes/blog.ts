import { PrismaClient, Tags } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { middleware } from "../middleware/authentication";
// TODO remove ts-ignote as you find the types

import {
  createPostInput,
  updatePostInput,
  // @ts-ignore
} from "../../node_modules/common_for_medium_blog_project/dist/index.js";

// all the props/varible which will be imported or passed down are need to be showed in the bindings
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    UserId: string;
  };
}>();

// post a blog
blogRouter.post("/createblog", async (c) => {
  const userId = c.get("UserId");

  const body = await c.req.json();
  console.log("got a post request body is ", body);

  // create a blog
  const result = createPostInput.safeParse(body);

  if (!result.success) {
    const result = createPostInput.safeParse(body);
    console.log("this is resultc var", result);
    const erroMessage = result.error.errors.message;
    console.log("erros are ", result._error);
    console.log(erroMessage);
    c.status(500);
    return c.json({
      "success": false,
      "msg": "Title must be atleast of 7 words and content must be atleast of 50 words",
    });
  }
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.posts.create({
      data: {
        title: body.title,
        content: body.content,
        // author: body.author,
        authorId: userId,
        Tags: body.Tag,
      },
      include: {
        author: true, // Include author data
      },
    });

    c.status(200);
    return c.json({
      msg: "success",
      newBlog: blog,
    });
  } catch (error) {
    console.log("Error from catch block\n", error);
    c.status(500);
    return c.json({
      msg: "unexpected error occured",
    });
  }
});

// get all the blog created by the user
blogRouter.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("UserId");

  try {
    const allBlogs = await prisma.posts.findMany({
      where: {
        authorId: userId,
      },
    });
    c.status(200);
    return c.json({
      msg: "success",
      "number of blogs": allBlogs.length,
      blogs: allBlogs,
    });
  } catch (error) {
    c.status(400);
    return c.json({
      msg: "unexpected error occurred",
    });
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("UserId");
  const body = await c.req.json();
  const blogTobeUpdatedId = body.blogId;
  const updatedContent = body.content;
  const updatedTitle = body.title;
  try {
    const result = updatePostInput.safeParse(body);
    console.log(result);
    console.log(result.success);
    if (!result.success) {
      console.log("control is here in the error block");
      const erroMessage = result.error.errors[0].message;
      return c.json({
        success: false,
        msg: erroMessage,
      });
    }
    console.log("contorl is here");
    const updatedblog = await prisma.posts.update({
      where: { id: blogTobeUpdatedId },
      data: { title: updatedTitle, content: updatedContent },
    });
    console.log(updatedblog);
    c.status(200);
    return c.json({
      msg: "success",
      updatedBlog: updatedblog,
    });
  } catch (error) {
    c.status(500);
    return c.json({
      msg: "blog doesn't exist",
    });
  }
});

blogRouter.delete("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log("del re is send ");
  try {
    const data = c.get("UserId");
    const body = await c.req.json();
    const blogTobeDeletedId = body.blogId;
    const blogTobeDeleted = await prisma.posts.delete({
      where: { id: blogTobeDeletedId }
    })
    console.log("the blogid is ", blogTobeDeletedId);
    console.log("this blog is needed to be delted", blogTobeDeleted);
    console.log(blogTobeDeletedId);
    c.status(200);
    return c.json({
      msg: "Successs",
      deletedBlog: blogTobeDeleted,
    });
  } catch (error) {
    c.status(500);
    console.log(error);
    return c.json({
      msg: "blog doesn't exist",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const userId = c.get("UserId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const allblogs = await prisma.posts.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        author: { select: { name: true, userInfo: true } },
        Likes: true,
        Tags: true
      },
    });
    // const truncatedBlogs = allblogs.map(blog => ({
    //   ...blog,
    //   content: blog.content.split(" ").slice(0, 50).join(" ") + "..."
    // }));

    const allblogsCount = allblogs.length;
    console.log(allblogs);
    c.status(200);
    return c.json({
      msg: "success",
      "number of blogs ": allblogsCount,
      blogs: allblogs,
      tags: Tags,
    });
  } catch (error) {
    c.status(500);
    c.json({
      msg: "unexpected error occurred",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const userId = c.get("UserId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // const body= await c.req.json();
    const blogId = c.req.param("id");
    console.log("blog id is", blogId);
    const blog = await prisma.posts.findUnique({
      where: { id: blogId },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        createdAt: true,
        author: {
          select: { name: true, id: true, userInfo: true },
        },
        Likes: true
      },
    });
    console.log(blog);
    c.status(200);
    return c.json({
      msg: "success",
      blog: blog,
    });
  } catch (error) {
    c.status(400);
    return c.json({ msg: "blog doesn't exist" });
  }
});



blogRouter.get("/authors/allauthorsinfo", async (c) => {
  const userId = c.get("UserId");
  console.log("got hit to route all authorInfo");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log("user id is this", userId);
  
  try {
    const allUserInfo = await prisma.user.findMany({
      where: { userInfo: { not: null } },
      select: { name: true, userInfo: true }
    });
    console.log(allUserInfo);
    c.status(200);
    return c.json({
      msg: "all users data",
      allUserInfo: allUserInfo
    })
  } catch (error) {
    console.log(error);
    c.status(300);
    return c.json({
      "error": error
    })
  }

})


blogRouter.post("/author/authorinfo", async (c) => {
  const userId = c.get("UserId");
  console.log("got hit authorInfo");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log(userId);
  const body = await c.req.json();
  console.log("body from the request is : ", body);

  try {
    const user = await prisma.user.findFirst({
      where: { id: userId }
    });
    if (!user) {
      c.status(300);
      return c.json({
        msg: "user not found",
      })
    }
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        userInfo: body
      }
    });
    console.log("user info is :", user);
    c.status(200);
    return c.json({
      msg: "success",
      User: updatedUser,
    })
  } catch (error) {
    console.log(error);
    return c.json({
      msg: "error"
    })
  }

});


blogRouter.post("/addlike/:id", async (c) => {
  const userId = c.get("UserId");
  console.log("got hit authorInfo");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogId = c.req.param("id");
  console.log(userId, blogId);
  try {
    const likes = await prisma.likes.create({
      data: {
        blogsId: blogId,
        userId: userId
      }
    })
    return c.json({ "msg": "success", "likes": likes })
    console.log(likes);
  } catch (error) {
    console.log(error);
    return c.json({ 'error': error });
  }
})