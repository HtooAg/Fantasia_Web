import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
	return (
		<>
			<StructuredData />
			<Header />
			<main>
				<Hero />
				<Services />
				<Projects />
				<About />
				<Team />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
