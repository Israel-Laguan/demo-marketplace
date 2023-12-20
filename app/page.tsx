import ApparelSections from "./home/ApparelSections";
import HeroSection from "./home/HeroSection";
import PaymentSection from "./home/PaymentSection";
import QuietLuxurySection from "./home/QuietLuxurySection";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<HeroSection />
			<QuietLuxurySection />
			<ApparelSections />
			<PaymentSection />
		</section>
	);
}
