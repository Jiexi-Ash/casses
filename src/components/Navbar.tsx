import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import Link from "next/link";

function Navbar() {
  return (
    <div className="py-6 px-6 border-b-2 shadow-sm bg-[#15305d] flex justify-between items-center">
      <div className="flex space-x-6 items-center">
        <div className="w-12 h-12 rounded-full border border-white bg-white"></div>
        <MainNav />
      </div>
      <div className="flex space-x-6 items-center">
        <div>
          <Input
            type="search"
            placeholder="Search for a casse..."
            className="w-[400px] bg-inherit border border-gray-400 placeholder:text-gray-200 text-white"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative w-10 h-10 rounded-full">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            forceMount
            className="bg-[#15305d] border w-64"
          >
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-2">
                <p className="text-xs text-white leading-none">Lance Jiexi</p>
                <p className="text-xs text-gray-300 leading-none">
                  Jiexiash@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-white text-xs">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white text-xs">
                Notifications
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white text-xs">
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-white text-xs">
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;

export const MainNav = () => {
  return (
    <nav className="flex space-x-6 items-center">
      <Link
        className="text-gray-300 hover:text-white text-base font-medium"
        href="/dashboard"
      >
        Overview
      </Link>
      <Link
        className="text-gray-300 hover:text-white text-base font-medium"
        href="/dashboard"
      >
        My Cases
      </Link>
      <Link
        className="text-gray-300 hover:text-white text-base font-medium"
        href="/dashboard"
      >
        My Queues
      </Link>
    </nav>
  );
};
