"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { signOutAction } from "@/actions/auth-action";

export default function UserProfile() {
  const session = useSession();

  const imageUrl = session?.data?.user?.image;
  const name = session?.data?.user?.name;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <Button
          variant={"secondary"}
          className="flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-full bg-white"
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              width={24}
              height={24}
              alt="user profile picture"
              className="rounded-full"
            />
          )}
          <p className="truncate">{name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="lg:w-full px-28 flex items-center justify-center">
          <form action={signOutAction}>
            <Button
              type="submit"
              variant={"ghost"}
              className="hover:text-primary"
            >
              Sign out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
