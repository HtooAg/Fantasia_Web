"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Building2, Quote } from "lucide-react";
import { Carousel } from "@/components/carousel";
import videos from "@/data/videos.json";

const featuredProjects = [
	{
		id: 1,
		title: "Luxury Corporate Gala",
		description:
			"An elegant corporate celebration featuring world-class entertainment, gourmet dining, and stunning visual displays for 500+ guests.",
		image: "/images/bgPattern1.png",
		category: "Corporate Events",
		guests: "500+",
		location: "Burj Al Arab, Dubai",
		date: "2024",
		tags: ["Luxury", "Corporate", "Entertainment"],
	},
	{
		id: 2,
		title: "Intimate Wedding Celebration",
		description:
			"A romantic beachside wedding with personalized décor, floral arrangements, and seamless coordination for an unforgettable day.",
		image: "/images/bgPattern.png",
		category: "Weddings",
		guests: "150",
		location: "One&Only Royal Mirage",
		date: "2024",
		tags: ["Wedding", "Luxury", "Beachside"],
	},
	{
		id: 3,
		title: "Product Launch Spectacular",
		description:
			"High-tech product launch event with interactive displays, celebrity appearances, and cutting-edge audio-visual production.",
		image: "/images/fantasia.jpg",
		category: "Product Launch",
		guests: "300",
		location: "Dubai Opera",
		date: "2024",
		tags: ["Technology", "Launch", "Innovation"],
	},
];

export function Projects() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Corporate"];
	const filteredVideos =
		selectedCategory === "All"
			? videos
			: videos.filter((video) => video.category === selectedCategory);

	return (
		<section
			id="projects"
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
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
						Featured{" "}
						<span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] bg-clip-text text-transparent dark:text-[var(--brand)] relative">
							Projects
							<motion.span
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-full origin-left"
							/>
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto pt-5">
						Explore our portfolio of exceptional events that
						showcase our creativity, attention to detail, and
						commitment to delivering extraordinary experiences that
						exceed expectations.
					</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="overflow-hidden card-gold-glow h-full group cursor-pointer">
								<CardContent className="p-0">
									<div className="aspect-video relative overflow-hidden">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-300 hover:scale-105"
										/>
										<div className="absolute top-4 left-4">
											<Badge
												variant="secondary"
												className="bg-[var(--brand)]/90 text-white"
											>
												{project.category}
											</Badge>
										</div>
									</div>
									<div className="p-6">
										<h3 className="font-bold text-xl mb-2 	 group-hover:text-[var(--brand)] transition-colors duration-300">
											{project.title}
										</h3>
										<p className="text-muted-foreground mb-4 text-sm leading-relaxed">
											{project.description}
										</p>

										<div className="space-y-2 mb-4">
											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<Users className="w-4 h-4" />
												<span>
													{project.guests} guests
												</span>
											</div>
											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<MapPin className="w-4 h-4" />
												<span>{project.location}</span>
											</div>
											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<Calendar className="w-4 h-4" />
												<span>{project.date}</span>
											</div>
										</div>

										<div className="flex flex-wrap gap-2 ">
											{project.tags.map(
												(tag, tagIndex) => (
													<Badge
														key={tagIndex}
														variant="outline"
														className="text-xs text-[var(--brand)]"
													>
														{tag}
													</Badge>
												)
											)}
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Client Testimonials */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
						What Our Clients{" "}
						<span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] bg-clip-text text-transparent dark:text-[var(--brand)] relative">
							Say
							<motion.span
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-full origin-left"
							/>
						</span>
					</h3>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 pt-3">
						Hear directly from our satisfied clients about their
						experiences with Fantasia DXB
					</p>

					{/* Category Filter */}
					<div className="flex justify-center gap-2 mb-8">
						{categories.map((category) => (
							<Button
								key={category}
								variant={
									selectedCategory === category
										? "default"
										: "outline"
								}
								size="sm"
								onClick={() => setSelectedCategory(category)}
								className={
									selectedCategory === category
										? "bg-[var(--brand)] hover:bg-[var(--brand-dark)]"
										: "border-[var(--brand)]/30 hover:border-[var(--brand)] hover:bg-[var(--brand)]/10"
								}
							>
								{category === "Corporate" && (
									<Building2 className="w-4 h-4 mr-2" />
								)}
								{category}
							</Button>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<Carousel
						itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
						autoSlide={false}
						className="px-8"
					>
						{filteredVideos.map((video) => (
							<Card
								key={video.id}
								className="overflow-hidden card-gold-glow cursor-pointer group"
							>
								<CardContent className="p-0">
									<div className="aspect-video relative bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand-light)]/5">
										<video
											src={video.url}
											controls
											playsInline
											preload="metadata"
											className="w-full h-full object-cover"
											aria-label={video.title}
										>
											Your browser does not support the
											video tag.
										</video>
									</div>
									<div className="p-6">
										<div className="flex items-start gap-3 mb-3">
											<Quote className="w-5 h-5 text-[var(--brand)] flex-shrink-0 mt-1" />
											<div>
												<h4 className="font-bold text-lg mb-1 group-hover:text-[var(--brand)] transition-colors duration-300">
													{video.title}
												</h4>
												<p className="text-sm text-muted-foreground mb-2">
													{video.caption}
												</p>
												<Badge
													variant="outline"
													className="text-xs text-[var(--brand)]"
												>
													{video.company}
												</Badge>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</Carousel>
				</motion.div>
			</div>
		</section>
	);
}
