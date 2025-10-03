"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
	label: string;
	href: string;
};

type MobileDrawerProps = {
	open: boolean;
	onClose: () => void;
	navItems: NavItem[];
	activeSection: string;
};

export function MobileDrawer({
	open,
	onClose,
	navItems,
	activeSection,
}: MobileDrawerProps) {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";

			const handleEscape = (e: KeyboardEvent) => {
				if (e.key === "Escape") onClose();
			};
			document.addEventListener("keydown", handleEscape);

			return () => {
				document.body.style.overflow = "unset";
				document.removeEventListener("keydown", handleEscape);
			};
		}
	}, [open, onClose]);

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-black/60 z-50 md:hidden"
						onClick={onClose}
						aria-hidden="true"
					/>

					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{
							type: "spring",
							damping: 30,
							stiffness: 300,
						}}
						className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-card z-50 md:hidden shadow-2xl"
						role="dialog"
						aria-modal="true"
						aria-label="Mobile navigation menu"
					>
						<div className="flex flex-col h-full">
							<div className="flex items-center justify-between p-4 border-b border-border">
								<div className="flex items-center">
									<Image
										src="/images/fantasiaLogo.jpg"
										alt="Fantasia DXB - Creative Events Company"
										width={50}
										height={50}
										className="max-w-full h-auto"
										priority
									/>
									<Image
										src="/images/fantasia.jpg"
										alt="Fantasia DXB - Creative Events Company"
										width={120}
										height={30}
										className="h-9 w-auto pl-5"
									/>
								</div>

								<Button
									variant="ghost"
									size="icon"
									onClick={onClose}
									aria-label="Close menu"
									className="ml-auto"
								>
									<X className="h-6 w-6" />
								</Button>
							</div>

							<nav className="flex-1 overflow-y-auto py-6 max-h-[calc(100vh-200px)]">
								<ul className="space-y-1 px-4">
									{navItems.map((item, index) => {
										const sectionId =
											item.href.substring(1);
										const isActive =
											activeSection === sectionId;

										return (
											<motion.li
												key={item.href}
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{
													delay: index * 0.05,
												}}
											>
												<Link
													href={item.href}
													onClick={onClose}
													className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 relative ${
														isActive
															? "bg-[var(--brand)]/10 text-[var(--brand)] font-semibold border-l-4 border-[var(--brand)]"
															: "hover:bg-accent hover:text-accent-foreground"
													}`}
												>
													{item.label}
												</Link>
											</motion.li>
										);
									})}
								</ul>
							</nav>

							<div className="p-6 border-t border-border space-y-4">
								<Button
									asChild
									className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dark)]"
								>
									<Link href="#contact">Get in Touch</Link>
								</Button>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
