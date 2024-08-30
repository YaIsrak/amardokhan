"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { LogInIcon, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function UserButton() {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="size-8">
              <AvatarFallback>FN</AvatarFallback>
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="p-2 text-sm text-muted-foreground">
              Logged as {user?.fullName}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <SignOutButton>
              <Button variant={"destructive"} className="w-full">
                <LogOut className="mr-2 size-4" />
                Sign out
              </Button>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <SignInButton>
          <Button size="sm" variant="outline">
            Login
            <LogInIcon className="ml-2 size-4" />
          </Button>
        </SignInButton>
      )}
    </>
  );
}
