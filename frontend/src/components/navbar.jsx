import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Navbar() {

return ( 

<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 relative z-10">
<div className="w-[150px] h-[180px]  rounded-full flex outline-none lg:ms-14">
    <button className="flex items-center gap-2  " href="#">
      {/*
      <MountainIcon className="h-6 w-6" /> */}
      <img src="/src/assets/thougthts.jpg" alt="Logo" className="font-bold text-xl "/>
    </button>
</div>
  <div className="flex w-full justify-end ">
    <nav className="hidden lg:flex gap-4">
      <button className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" href="#">
        Home
      </button>
      <button className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" href="#">
        About Us
      </button>
      <button className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" href="#">
        Contact Us
      </button>
    </nav>
  </div>
  <div className="ml-auto w-[150px] flex justify-end">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9">
          <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JP</AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

</header>


)
}