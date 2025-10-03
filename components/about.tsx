"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, Heart } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

const values = [
	{
		icon: Award,
		title: "Excellence",
		description:
			"Committed to delivering exceptional quality and exceeding expectations in every project we undertake",
	},
	{
		icon: Target,
		title: "Precision",
		description:
			"Meticulous attention to detail and strategic planning ensures flawless execution from start to finish",
	},
	{
		icon: Heart,
		title: "Passion",
		description:
			"Driven by genuine creativity, innovation, and unwavering dedication to our craft and clients",
	},
];

const stats = [
	{ number: 500, suffix: "+", label: "Events Delivered" },
	{ number: 10, suffix: "+", label: "Years Experience" },
	{ number: 50, suffix: "+", label: "Team Members" },
	{ number: 100, suffix: "%", label: "Client Satisfaction" },
];

export function About() {
	return (
		<section
			id="about"
			className="py-32 lg:py-20 relative bg-gradient-to-br from-background to-muted/20 animated-bg-pattern"
		>
			<div className="container mx-auto relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
					<motion.div
						initial={{ opacity: 0, x: -60, scale: 0.9 }}
						whileInView={{ opacity: 1, x: 0, scale: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand-light)]/10 flex items-center justify-center">
							<Image
								src="/images/fantasiaLogo.jpg"
								alt="Fantasia DXB - Creative Events Company"
								width={100}
								height={100}
								className="max-w-full h-auto"
								priority
							/>
							<Image
								src="/images/fantasia.jpg"
								alt="Fantasia DXB - Creative Events Company"
								width={300}
								height={120}
								className="max-w-full h-auto pl-5"
								priority
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 60, scale: 0.9 }}
						whileInView={{ opacity: 1, x: 0, scale: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
					>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
							About{" "}
							<span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] bg-clip-text text-transparent dark:text-[var(--brand)]">
								Fantasia DXB
							</span>
						</h2>
						<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
							Fantasia DXB is Dubai's premier creative events
							company, specializing in transforming extraordinary
							visions into unforgettable experiences. With over a
							decade of expertise in luxury event planning,
							production, and innovative design, we have
							established ourselves as the go-to partner for
							discerning clients across the UAE and beyond.
						</p>

						<p className="text-lg text-muted-foreground mb-8 leading-relaxed">
							Our award-winning team of creative professionals,
							project managers, and technical specialists work
							collaboratively to ensure that every detail is
							meticulously planned and flawlessly executed. We
							pride ourselves on our ability to create magical
							moments that leave lasting impressions and build
							meaningful connections.
						</p>

						<div className="space-y-4">
							{values.map((value, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30, x: -20 }}
									whileInView={{ opacity: 1, y: 0, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: 0.4 + index * 0.15,
										ease: "easeOut",
									}}
									whileHover={{ scale: 1.02, x: 10 }}
									className="flex gap-4 items-start p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300"
								>
									<div className="w-12 h-12 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center flex-shrink-0">
										<value.icon className="w-6 h-6 text-[var(--brand)]" />
									</div>
									<div>
										<h3 className="font-bold text-lg mb-1">
											{value.title}
										</h3>
										<p className="text-muted-foreground">
											{value.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Stats Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border"
						>
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<AnimatedCounter
										end={stat.number}
										suffix={stat.suffix}
										duration={2500 + index * 200}
										className="text-2xl md:text-3xl font-bold text-[var(--brand)] mb-1 block"
									/>
									<div className="text-sm text-muted-foreground">
										{stat.label}
									</div>
								</div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
