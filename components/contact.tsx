"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			service: formData.get("service"),
			message: formData.get("message"),
		};

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				toast({
					title: "Message sent!",
					description: "We will get back to you soon.",
				});
				e.currentTarget.reset();
			} else {
				throw new Error("Failed to send message");
			}
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to send message. Please try again.",
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			id="contact"
			className="py-32 lg:py-20 relative bg-gradient-to-br from-background to-muted/20 animated-bg-pattern"
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
						Get in{" "}
						<span className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] bg-clip-text text-transparent dark:text-[var(--brand)] relative">
							Touch
							<motion.span
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-full origin-left"
							/>
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Ready to create something extraordinary? Let's discuss
						your vision and bring your dream event to life. Our team
						is here to make it happen with creativity, precision,
						and unmatched attention to detail.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Card className="card-gold-glow cursor-pointer">
							<CardContent className="p-6 lg:p-8">
								<div className="flex flex-row items-center justify-center mb-10">
									<Image
										src="/images/fantasiaLogo.jpg"
										alt="Fantasia DXB - Creative Events Company"
										width={80}
										height={80}
										className="max-w-full h-auto"
										priority
									/>
									<Image
										src="/images/fantasia.jpg"
										alt="Fantasia DXB - Creative Events Company"
										width={200}
										height={120}
										className="max-w-full h-auto pl-5"
										priority
									/>
								</div>
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium mb-2"
										>
											Name
										</label>
										<Input
											id="name"
											name="name"
											required
											placeholder="Your name"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium mb-2"
										>
											Email
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											required
											placeholder="your@email.com"
										/>
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium mb-2"
										>
											Phone
										</label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="+971 XX XXX XXXX"
										/>
									</div>

									{/* <div>
										<label
											htmlFor="service"
											className="block text-sm font-medium mb-2"
										>
											Service
										</label>
										<select
											id="service"
											name="service"
											className="w-full h-10 px-3 rounded-md border border-input bg-background"
										>
											<option value="">
												Select a service
											</option>
											<option value="event-planning">
												Event Planning
											</option>
											<option value="creative-design">
												Creative Design
											</option>
											<option value="production">
												Production Management
											</option>
											<option value="other">Other</option>
										</select>
									</div> */}

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium mb-2"
										>
											Message
										</label>
										<Textarea
											id="message"
											name="message"
											required
											rows={5}
											placeholder="Tell us about your event..."
										/>
									</div>

									<Button
										type="submit"
										disabled={loading}
										className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white"
									>
										{loading
											? "Sending..."
											: "Send Message"}
									</Button>

									<p className="text-xs text-muted-foreground text-center">
										By submitting this form, you agree to
										our privacy policy.
									</p>
								</form>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						<div className="text-left">
							<h3 className="text-2xl font-bold mb-6">
								Contact Information
							</h3>

							<div className="space-y-4">
								<div className="flex gap-4 justify-start">
									<div className="w-12 h-12 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center flex-shrink-0">
										<Mail className="w-6 h-6 text-[var(--brand)]" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold mb-1">
											Email
										</h4>
										<a
											href="mailto:info@fantasiadxb.com"
											className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
										>
											info@fantasiadxb.com
										</a>
									</div>
								</div>

								<div className="flex gap-4 justify-start">
									<div className="w-12 h-12 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center flex-shrink-0">
										<Phone className="w-6 h-6 text-[var(--brand)]" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold mb-1">
											Phone
										</h4>
										<a
											href="tel:+971528411575"
											className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
										>
											+971 52 841 1575
										</a>
									</div>
								</div>

								<div className="flex gap-4 justify-start">
									<div className="w-12 h-12 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center flex-shrink-0">
										<MapPin className="w-6 h-6 text-[var(--brand)]" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold mb-1">
											Location
										</h4>
										<p className="text-muted-foreground">
											Dubai, United Arab Emirates
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="overflow-hidden card-gold-glow cursor-pointer">
							<CardContent className="p-0">
								<div className="aspect-video relative">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6829087747!2d54.89782924999999!3d25.0762677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										title="Dubai Location Map"
										className="absolute inset-0"
									/>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
