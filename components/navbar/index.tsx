'use client'
import { Navbar as NextUINavbar } from "@nextui-org/navbar";
import NavBarRightContent from "./NavBarRightContent";
import NavBarLeftContent from "./NavBarLeftContent";
import { useSession } from "next-auth/react"

const NavBar: React.FC = () => {
  const { status } = useSession()
  // Example user state (you can replace this with your authentication logic)
  const isLoggedIn = status === "authenticated";
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavBarRightContent />
      <NavBarLeftContent isLoggedIn={isLoggedIn} />
    </NextUINavbar>
  );
};

export default NavBar;
