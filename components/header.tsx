"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { MobileDrawer } from "@/components/mobile-drawer";
import { motion } from "framer-motion";

export function Header() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");
	const { theme, toggleTheme } = useTheme();

	const navItems = [
		{ label: "Home", href: "#hero" },
		{ label: "Services", href: "#services" },
		{ label: "Projects", href: "#projects" },
		{ label: "About", href: "#about" },
		{ label: "Team", href: "#team" },
		{ label: "Contact", href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => item.href.substring(1));
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call once to set initial state

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
			>
				<div className="container mx-auto px-4 lg:px-8">
					<div className="flex items-center justify-between h-16 lg:h-20">
						{/* Logo - Left Side */}
						<motion.div
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								duration: 0.6,
								delay: 0.2,
								ease: "easeOut",
							}}
							className="flex-shrink-0"
						>
							<Link href="/" className="flex items-center">
								<Image
									src="/images/fantasiaLogo.jpg"
									alt="Fantasia DXB - Creative Events Company"
									width={40}
									height={40}
									className="max-w-full h-auto"
									priority
								/>
								<Image
									src="/images/fantasia.jpg"
									alt="Fantasia DXB - Creative Events Company"
									width={200}
									height={100}
									className="max-w-full h-auto pl-5"
									priority
								/>
							</Link>
						</motion.div>

						{/* Navigation - Center */}
						<motion.nav
							initial={{ y: -30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 0.6,
								delay: 0.4,
								ease: "easeOut",
							}}
							className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8"
						>
							{navItems.map((item, index) => {
								const sectionId = item.href.substring(1);
								const isActive = activeSection === sectionId;

								return (
									<motion.div
										key={item.href}
										initial={{ y: -20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											duration: 0.5,
											delay: 0.6 + index * 0.1,
											ease: "easeOut",
										}}
									>
										<Link
											href={item.href}
											className={`text-sm font-medium transition-all duration-300 relative ${
												isActive
													? "text-[var(--brand)] font-semibold"
													: "hover:text-[var(--brand)]"
											}`}
										>
											{item.label}
											{isActive && (
												<motion.span
													initial={{ scaleX: 0 }}
													animate={{ scaleX: 1 }}
													transition={{
														duration: 0.3,
													}}
													className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--brand)] rounded-full origin-left"
												/>
											)}
										</Link>
									</motion.div>
								);
							})}
						</motion.nav>

						{/* Theme Toggle & Mobile Menu - Right Side */}
						<motion.div
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								duration: 0.6,
								delay: 0.8,
								ease: "easeOut",
							}}
							className="flex items-center gap-6 md:gap-2 flex-shrink-0"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 180 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
							>
								<Button
									variant="ghost"
									size="icon"
									onClick={toggleTheme}
									aria-label={`Switch to ${
										theme === "light" ? "dark" : "light"
									} mode`}
								>
									{theme === "light" ? (
										<Moon className="h-5 w-5" />
									) : (
										<Sun className="h-5 w-5" />
									)}
								</Button>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="md:hidden"
									onClick={() => setDrawerOpen(true)}
									aria-label="Open menu"
								>
									<Menu className="h-6 w-6" />
								</Button>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.header>

			<MobileDrawer
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				navItems={navItems}
				activeSection={activeSection}
			/>
		</>
	);
}
