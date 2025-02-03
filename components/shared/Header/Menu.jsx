import { MenuIcon, Sun, SunIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Menu() {
    return (
        <>
            <nav className="hidden md:flex w-full gap-1">
                <div className="flex">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            Home
                        </Button>
                    </Link>
                    <Link href="/blog">
                        <Button
                            variant="ghost"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            Blog
                        </Button>
                    </Link>
                    <Link href="/projects">
                        <Button
                            variant="ghost"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            Projects
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button
                            variant="ghost"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            About
                        </Button>
                    </Link>
                    <Link href="/resume">
                        <Button
                            variant="ghost"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            Resume
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button
                            variant="ghost"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            Contact
                        </Button>
                    </Link>
                </div>
                <ModeToggle />
                <Button
                    variant="ghost"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    <Link href="/sign-in">
                        <UserIcon size={24} />
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    <MenuIcon size={24} />
                </Button>
            </nav>
            <nav className="md:hidden">
                <ModeToggle />
                <Button
                    variant="ghost"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    <Link href="/sign-in">
                        <UserIcon size={24} />
                    </Link>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            variant="ghost"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                            <MenuIcon size={24} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <Link href="/">
                            <DropdownMenuLabel>
                                Home
                            </DropdownMenuLabel>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link href="/blog">
                            <DropdownMenuItem>
                                Blog
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/projects">
                            <DropdownMenuItem>
                                Projects
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/about">
                            <DropdownMenuItem>
                                About
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/resume">
                            <DropdownMenuItem>
                                Resume
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/contact">
                            <DropdownMenuItem>
                                Contact
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </>
    );
}

export default Menu;
