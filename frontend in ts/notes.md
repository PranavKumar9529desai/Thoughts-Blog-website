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