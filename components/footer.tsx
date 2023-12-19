import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

const Footer: React.FC = () => {
  return (
    <footer className="w-full items-center justify-center py-3 bg-gray-800 text-white p-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.name}</p>
        </div>
        {siteConfig.footerItems.map((item, key) => (
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            color="foreground"
            href={item.href}
            key={`footer-link-${key}`}
          >
            {item.label}
          </NextLink>
        ))}
      </div>
      <div className="text-center mt-4">
        <p>
          Website built by
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://github.com/Israel-Laguan"
            title="Israel Laguan's Repositories"
          >
            <span className="text-default-600">Israel Laguan</span>
            <span className="text-primary">(GitHub)</span>
          </Link>
          . 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
