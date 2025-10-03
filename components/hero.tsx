"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/typewriter-text";

export function Hero() {
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 150]);
	const y2 = useTransform(scrollY, [0, 500], [0, -100]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 navy-curve-bg"
		>
			<motion.div className="absolute inset-0 z-0" style={{ opacity }}>
				<div className="absolute inset-0 bg-gradient-to-br from-[#202A44] via-[#2a3654] to-[#3a4664]" />

				<motion.div
					style={{ y: y1 }}
					className="absolute inset-0 opacity-20"
				>
					<Image
						src="/images/bgPattern1.png"
						alt=""
						fill
						className="object-cover mix-blend-overlay"
						priority
					/>
				</motion.div>

				<motion.svg
					style={{ y: y2 }}
					className="absolute inset-0 w-full h-full"
					viewBox="0 0 1440 800"
					preserveAspectRatio="xMidYMid slice"
					aria-hidden="true"
				>
					<defs>
						<linearGradient
							id="curve1"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								stopColor="#8b6543"
								stopOpacity="0.2"
							/>
							<stop
								offset="100%"
								stopColor="#8b6543"
								stopOpacity="0.05"
							/>
						</linearGradient>
						<linearGradient
							id="curve2"
							x1="100%"
							y1="0%"
							x2="0%"
							y2="100%"
						>
							<stop
								offset="0%"
								stopColor="#a67d5a"
								stopOpacity="0.15"
							/>
							<stop
								offset="100%"
								stopColor="#6e4f35"
								stopOpacity="0.1"
							/>
						</linearGradient>
					</defs>

					<path
						d="M0,400 Q360,200 720,350 T1440,300 L1440,800 L0,800 Z"
						fill="url(#curve1)"
					/>
					<path
						d="M0,500 Q360,350 720,450 T1440,400 L1440,800 L0,800 Z"
						fill="url(#curve2)"
					/>
				</motion.svg>
			</motion.div>

			<div className="container mx-auto px-4 lg:px-8 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mb-8 flex flex-col items-center justify-center"
					>
						<Image
							src="/images/fantasiaLogo.jpg"
							alt="Fantasia DXB - Creative Events Company"
							width={120}
							height={120}
							className="max-w-full h-auto"
							priority
						/>
						<Image
							src="/images/fantasia.jpg"
							alt="Fantasia DXB - Creative Events Company"
							width={200}
							height={120}
							className="max-w-full h-auto pt-5"
							priority
						/>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.2,
							ease: "easeOut",
						}}
						className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-balance leading-tight font-semibold"
						style={{
							fontFamily: "'Playfair Display', 'Georgia', serif",
						}}
					>
						<TypewriterText
							text="Creative Events That"
							className="text-white"
							speed={120}
							pauseDuration={1000}
						/>
						<br />
						<TypewriterText
							text="Inspire"
							className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] bg-clip-text text-transparent font-extrabold"
							speed={120}
							pauseDuration={3000}
							delay={2500}
						/>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.4,
							ease: "easeOut",
						}}
						className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto text-pretty leading-relaxed"
					>
						Transforming visions into unforgettable experiences
						across Dubai and the UAE. From intimate gatherings to
						grand celebrations, we bring your events to life with
						unmatched creativity.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.6,
							ease: "easeOut",
						}}
						className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
					>
						<Button
							asChild
							size="lg"
							className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white group"
						>
							<Link href="#contact">
								Get in Touch
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							className="bg-transparent text-white hover:bg-white/10 dark:text-white dark:hover:bg-white/10 border-2 border-white/50 hover:border-white font-semibold backdrop-blur-sm"
						>
							<Link href="#projects">Our Work</Link>
						</Button>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2, duration: 1 }}
					className="absolute bottom left-1/2 -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{
							repeat: Number.POSITIVE_INFINITY,
							duration: 2,
							ease: "easeInOut",
						}}
						className="w-6 h-10 border-2 border-[var(--brand)] rounded-full flex items-start justify-center p-2 shadow-lg shadow-[var(--brand)]/20"
					>
						<motion.div
							className="w-1 h-2 bg-[var(--brand)] rounded-full"
							animate={{ opacity: [1, 0.3, 1] }}
							transition={{
								repeat: Number.POSITIVE_INFINITY,
								duration: 2,
								ease: "easeInOut",
							}}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
