import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/general/theme-switch";
import { GithubIcon } from "@/components/icons";
import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Navbar = () => {
  // might add back later
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <HeroUINavbar maxWidth="2xl" position="sticky">
      <NavbarBrand className="gap-3 max-w-fit">
        <Link
          className="flex justify-start items-center gap-1"
          color="foreground"
          href="/"
        >
          <p className="font-bold text-inherit">Chris Ray</p>
        </Link>
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} title="Linkedin">
            <Icon icon="lucide:linkedin" />
          </Link>
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          <NavbarItem>
            <Divider orientation="vertical" className="ml-2" />
          </NavbarItem>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ThemeSwitch className="hidden lg:flex" />
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={"foreground"} href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
