import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAVBAR_ITEMS, NavItem } from "../constants";

const renderNavItem = (item: NavItem) => {
  if (item.children) {
    return (
      <NavigationMenu
        key={item.label}
        className="hover:text-accents-yellow-3"
        viewportClassName="overflow-hidden hover:overflow-visible"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
            <NavigationMenuContent className="pl-4 pr-12 text-text-light-1">
              <ul>
                {item.children.map((child) =>
                  child.children ? (
                    <li key={child.label}>
                      <NavigationMenu className="hover:text-accents-yellow-3">
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>
                              {child.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="pl-4 pr-12 text-text-light-1">
                              <ul>
                                {child.children.map((subChild) => (
                                  <li key={subChild.label}>
                                    <Link
                                      href={subChild.href!}
                                      className="hover:text-accents-yellow-3"
                                    >
                                      {subChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </li>
                  ) : (
                    <li key={child.label}>
                      <Link
                        href={child.href!}
                        className="hover:text-accents-yellow-3"
                      >
                        {child.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <Link
      key={item.label}
      href={item.href!}
      className="hover:text-accents-yellow-3"
    >
      {item.label}
    </Link>
  );
};

const NavbarDesktop = () => {
  return (
    <div className="hidden sm:flex space-x-6 lg:space-x-10 text-b5 lg:text-b4">
      {NAVBAR_ITEMS.map(renderNavItem)}
    </div>
  );
};

export default NavbarDesktop;
