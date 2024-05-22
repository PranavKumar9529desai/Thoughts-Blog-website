## shortcut to create react components 
  rfce

### Quote Component should disappear when the when on below lg breakpoint
      remember as the twailwind is mobile first so lg means lg and uppar and invisible before it menas for md and sm it invisible 
   <div className="h-screen w-6/12 hidden lg:block">
            <Quote />
        </div>
---> much better to use the hidden instead of invisible as it removes the element imstead of making it invisible 

If you want to remove the element from the document flow when it's not visible, you should use the hidden class instead. This class will set the display property to none, which will remove the element from the document flow.


###  //send the data when the form is submitted 
     // using form makes code much much cleaner html5 makes it much cleaner

### how to pass the props in the code 

// Expects a single string parameter
function Avatar(name: string) {
  // ...
}

// Usage: Avatar("John Doe")

// Expects an object with a `name` property
function Avatar({ name }: { name: string }) {
  // ...
}

// Usage: <Avatar name="John Doe" />

### how to add thin lines after the border
    <div className='bg-slate-200 h-1 w-full'></div>


### how to use merged classe in twailwind css 
clx let's you use the 2 or more classes and manipulate them dynamically.


### in Twailwind to px use [valuepx]
---> w-[720px]

### prisma 
updating the schema it means migrating so the command is 
npx prisma migrate dev --name "schema info for "

### while using vite define the allias in the vite.config not in ts.config
  xport default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@state': '/src/state',
      '@hooks': '/src/hooks',
      '@common': '../common',
    }
  }
})


# how to serve the file from the folder

n a production environment, your site would be served from a server using the http:// or https:// protocol, which doesn't have these limitations.

To view your built project locally, you need to serve it from a local server. You can do this using a simple static server. One common tool for this is serve. You can install it globally with npm using the following command:

Then, navigate to the directory containing your index.html file (usually the dist directory) and run the following command:

npm install -g serve

serve .