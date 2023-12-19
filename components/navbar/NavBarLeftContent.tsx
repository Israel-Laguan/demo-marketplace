import {
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { ChevronDown, TagUser } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";

const NavBarLeftContent: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {

  const userIcons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {isLoggedIn ? (
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={userIcons.chevron}
                  radius="sm"
                  variant="light"
                >
                  {userIcons.user}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="User Menu">
              <DropdownItem key="admin">
                <Link href="/admin">Dashboard</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/user-profile">Profile</Link>
              </DropdownItem>
              <DropdownItem>
                <Button>Logout</Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button>Login</Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink href={item.href}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  size="lg"
                >
                  {item.label}
                </Link>
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </>
  );
};

export default NavBarLeftContent;