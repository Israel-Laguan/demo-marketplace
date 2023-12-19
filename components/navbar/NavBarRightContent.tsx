import {
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import NavBarBrand from "./NavBarBrand";

const NavBarRightContent: React.FC = () => (
  <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
    <NavBarBrand />
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href={item.href}
          >
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  </NavbarContent>
);

export default NavBarRightContent;