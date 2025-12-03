"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const currrentPath = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/media", label: "Media" },
  ];

  return (
    <div className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="flex flex-row justify-between items-center py-2">
        <a href="/">
          <div className="flex flex-row items-center gap-3">
            <p className="text-xl"><b>Dr. Marc Lewis</b></p>
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
          <Link href="/contact">Contact Now</Link>
        </Button>

        {/* Mobile Hamburger Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Dr. Marc Lewis</SheetTitle>
            </SheetHeader>
            <div className="px-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map(({ href, label }) => (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className={
                        currrentPath === href
                          ? "text-lg font-semibold underline underline-offset-4 py-2"
                          : "text-lg py-2 hover:text-primary transition-colors"
                      }
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4">
                    <Link href="/contact">Contact Now</Link>
                  </Button>
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}