import { Header } from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Service from "@/components/sections/service";
import Concerns from "@/components/sections/concerns";
import WorkProcess from "@/components/sections/work-process";
import Pricing from "@/components/sections/pricing";
import DomainSearch from "@/components/sections/domain-search";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import FAQs from "@/components/sections/faqs";
import {
	ServiceStructuredData,
	FAQStructuredData,
	PricingStructuredData,
} from "@/components/seo/structured-data";
import Footer from "@/components/layout/footer";
import SubscribeForm from "@/components/subscribe-form";

export default function HomePage() {
	return (
		<>
			<ServiceStructuredData />
			<FAQStructuredData />
			<PricingStructuredData />

			<div className="container mx-auto">
				<Header />

				<main className="px-4 max-w-screen-xl pt-16 mx-auto">
					<Hero />
					<Service />
					<Concerns />
					<WorkProcess />
					<Pricing />
					<DomainSearch />
					<About />
					<Testimonials />
					<FAQs />
				</main>
				<SubscribeForm />
				<Footer />
			</div>
		</>
	);
}
