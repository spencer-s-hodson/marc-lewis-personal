"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const currrentPath = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="flex flex-row justify-between items-center py-2">
        <a href="/">
          <div className="flex flex-row items-center gap-3">
            <p className="text-lg"><b>Dr. Marc Lewis</b></p>
          </div>
        </a>

        {/* Desktop Navigation - Hidden on small screens */}
        <NavigationMenu data-orientation="vertical" className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  href={href}
                  className={
                    currrentPath === href
                      ? "underline underline-offset-4 px-3"
                      : "px-3"
                  }
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Contact Button - Hidden on small screens */}
        <Button asChild className="hidden lg:flex">
          <Link href="/contact">Contact</Link>
        </Button>

        {/* Mobile Hamburger Menu - Only visible on small screens */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={
                    currrentPath === href
                      ? "text-lg font-semibold underline underline-offset-4 py-2"
                      : "text-lg py-2 hover:text-primary transition-colors"
                  }
                >
                  {label}
                </Link>
              ))}
              <Button className="mt-4" onClick={() => setIsOpen(false)}>
                Contact
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}