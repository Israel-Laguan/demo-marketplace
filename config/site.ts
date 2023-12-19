export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Quiet-Lux",
	description: "Discover the epitome of simplicity and luxury at Quiet-Lux, your go-to destination for finely curated, sophisticated wear. Explore our meticulously crafted collections, featuring minimalist designs that redefine elegance. Immerse yourself in a shopping experience where every piece tells a story of understated refinement. Elevate your style with Quiet-Lux - where simplicity meets opulence.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Bag",
			href: "/bag",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	footerItems: [
		{
			label: 'About',
			href: '/about'
		},
		{
			label: 'Legal',
			href: '/legal'
		},
		{
			label: 'Shop',
			href: '/shop'
		},
	],
	links: {
		nextui: "https://github.com/nextui-org/nextui",
		favicon: "https://favicon.io/emoji-favicons/t-shirt/",
		assets: "https://nextui.org",
	},
};
