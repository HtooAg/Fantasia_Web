"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Star, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/carousel";
import team from "@/data/team.json";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export function Team() {
	return (
		<section
			id="team"
			className="py-32 lg:py-20 bg-gradient-to-br from-background to-muted/30 relative navy-curve-bg"
		>
			<div className="container mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
						Meet Our{" "}
						<span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] bg-clip-text text-transparent dark:text-[var(--brand)]">
							Team
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Our passionate team of creative professionals, event
						specialists, and project managers work together to
						deliver exceptional experiences that exceed your
						expectations and create lasting memories.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<Carousel
						itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
						autoSlide={true}
						autoSlideInterval={5000}
						className="px-8"
					>
						{team.map((member, index) => {
							const isLeadership =
								member.role.toLowerCase().includes("ceo") ||
								member.role.toLowerCase().includes("manager") ||
								member.role.toLowerCase().includes("head");
							const isCreative =
								member.role
									.toLowerCase()
									.includes("creative") ||
								member.role.toLowerCase().includes("design");

							return (
								<Card
									key={`${member.name}-${index}`}
									className="h-full card-gold-glow group relative overflow-hidden"
								>
									{/* Background Pattern */}
									<div className="absolute inset-0 opacity-5">
										<div className="w-full h-full bg-gradient-to-br from-[var(--brand)]/10 to-transparent" />
									</div>

									<CardContent className="p-6 relative z-10">
										{/* Badge for role type */}
										<div className="absolute top-4 right-4">
											{isLeadership && (
												<Badge
													variant="secondary"
													className="bg-[var(--brand)]/20 text-[var(--brand)] border-[var(--brand)]/30"
												>
													<Award className="w-3 h-3 mr-1" />
													Leadership
												</Badge>
											)}
											{isCreative && !isLeadership && (
												<Badge
													variant="secondary"
													className="bg-purple-500/20 text-purple-600 border-purple-500/30"
												>
													<Star className="w-3 h-3 mr-1" />
													Creative
												</Badge>
											)}
											{!isLeadership && !isCreative && (
												<Badge
													variant="secondary"
													className="bg-blue-500/20 text-blue-600 border-blue-500/30"
												>
													<Users className="w-3 h-3 mr-1" />
													Team
												</Badge>
											)}
										</div>

										{/* Profile Image with enhanced styling */}
										<div className="relative w-32 h-32 mx-auto mb-6">
											<div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--brand)]/20 to-[var(--brand-light)]/10 blur-lg"></div>
											<div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[var(--brand)]/30 shadow-xl">
												<Image
													src={`/images/${member.image}`}
													alt={member.name}
													fill
													className="object-cover transition-transform duration-300 group-hover:scale-110"
												/>
											</div>
										</div>

										<div className="text-center space-y-4">
											{/* Name and Role */}
											<div>
												<h3 className="font-bold text-xl mb-2 group-hover:text-[var(--brand)] transition-colors">
													{member.name}
												</h3>
												<p className="text-sm font-medium text-[var(--brand)] mb-3 px-3 py-1 bg-[var(--brand)]/10 rounded-full inline-block">
													{member.role}
												</p>
											</div>

											{/* Contact Information */}
											<div className="space-y-3 pt-4 border-t border-border/50 ">
												<a
													href={`mailto:${member.email}`}
													className="flex items-center justify-center gap-3 text-sm text-muted-foreground hover:text-[var(--brand)] transition-all duration-300 hover:bg-[var(--brand)]/5 rounded-lg p-2"
													aria-label={`Email ${member.name}`}
												>
													<div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 flex items-center justify-center">
														<Mail className="w-4 h-4" />
													</div>
													<span className="truncate font-medium">
														{member.email}
													</span>
												</a>
												<a
													href={`tel:${member.phone}`}
													className="flex items-center justify-center gap-3 text-sm text-muted-foreground hover:text-[var(--brand)] transition-all duration-300 hover:bg-[var(--brand)]/5 rounded-lg p-2"
													aria-label={`Call ${member.name}`}
												>
													<div className="w-8 h-8 rounded-full bg-[var(--brand)]/10 flex items-center justify-center">
														<Phone className="w-4 h-4" />
													</div>
													<span className="font-medium">
														{member.phone}
													</span>
												</a>
											</div>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
