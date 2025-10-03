"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
	Calendar,
	Lightbulb,
	Users,
	Sparkles,
	Camera,
	Music,
	Utensils,
	Gift,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
	{
		icon: Calendar,
		title: "Luxury Event Planning",
		description:
			"Comprehensive planning services from initial concept to flawless execution, managing every detail with precision and creativity for unforgettable experiences.",
	},
	{
		icon: Lightbulb,
		title: "Creative Design & Styling",
		description:
			"Innovative design solutions and bespoke styling that transform spaces and bring your unique vision to life with stunning visual impact and artistic flair.",
	},
	{
		icon: Users,
		title: "Professional Coordination",
		description:
			"Expert coordination of all event elements with our seasoned team of professionals, ensuring seamless communication and perfect timing throughout your event.",
	},
	{
		icon: Sparkles,
		title: "Full Production Management",
		description:
			"Complete production oversight including vendor management, logistics coordination, technical support, and on-site supervision for flawless event execution.",
	},
	{
		icon: Camera,
		title: "Photography & Videography",
		description:
			"Professional photography and videography services to capture every precious moment, creating lasting memories of your special event with artistic excellence.",
	},
	{
		icon: Music,
		title: "Entertainment & Audio",
		description:
			"Curated entertainment solutions and state-of-the-art audio-visual systems to create the perfect atmosphere and keep your guests engaged throughout the event.",
	},
	{
		icon: Utensils,
		title: "Catering & Hospitality",
		description:
			"Exquisite catering services featuring world-class cuisine and impeccable hospitality to delight your guests with unforgettable culinary experiences.",
	},
	{
		icon: Gift,
		title: "Luxury Gifting & Favors",
		description:
			"Bespoke luxury gifts and personalized favors that reflect your style and leave a lasting impression on your guests, adding that special touch to your event.",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 30, scale: 0.9 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
	},
};

export function Services() {
	return (
		<section
			id="services"
			className="py-32 lg:py-20 relative bg-muted/30 scroll-bg-pattern"
		>
			<div className="container mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
						Our{" "}
						<span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] bg-clip-text text-transparent dark:text-[var(--brand)] relative">
							Services
							<motion.span
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-full origin-left"
							/>
						</span>
					</h2>
					<p className="text-lg text-muted-foreground pt-5 max-w-3xl mx-auto">
						Comprehensive luxury event solutions tailored to your
						unique vision and requirements. From intimate gatherings
						to grand celebrations, we deliver exceptional
						experiences that exceed expectations.
					</p>
				</motion.div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
				>
					{services.map((service, index) => (
						<motion.div key={index} variants={item}>
							<Card className="h-full card-gold-glow group cursor-pointer">
								<CardContent className="p-6 flex flex-col items-center text-center">
									<motion.div
										className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand-light)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.6 }}
									>
										<service.icon className="w-8 h-8 text-[var(--brand)]" />
									</motion.div>
									<h3 className="text-xl font-bold mb-2 group-hover:text-[var(--brand)] transition-colors duration-300">
										{service.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{service.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
