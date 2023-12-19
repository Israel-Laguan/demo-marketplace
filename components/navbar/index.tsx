import { Navbar as NextUINavbar } from "@nextui-org/navbar";
import NavBarRightContent from "./NavBarRightContent";
import NavBarLeftContent from "./NavBarLeftContent";

const NavBar: React.FC = () => {
  // Example user state (you can replace this with your authentication logic)
  const isLoggedIn = false;
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavBarRightContent />
      <NavBarLeftContent isLoggedIn={isLoggedIn} />
    </NextUINavbar>
  );
};

export default NavBar;
