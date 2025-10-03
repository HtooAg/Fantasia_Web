import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-card border-t border-border">
			<div className="container mx-auto px-4 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 mb-8 text-center md:text-left">
					<div className="flex flex-col items-center md:items-start">
						<div className="mb-4 flex justify-center md:justify-start">
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
						</div>
						<p className="text-sm text-muted-foreground py-4">
							Dubai's premier luxury event planning company,
							creating unforgettable experiences with unmatched
							creativity, precision, and attention to detail.
						</p>
						<p className="text-sm text-muted-foreground">
							Specializing in luxury weddings, corporate events,
							private celebrations, and creative design services
							across the UAE.
						</p>
					</div>

					<div>
						<h3 className="font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#home"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									href="#services"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="#projects"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#team"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Team
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-bold mb-4">Contact</h3>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
								<Mail className="w-4 h-4" />
								<a
									href="mailto:info@fantasiadxb.com"
									className="hover:text-[var(--brand)] transition-colors"
								>
									info@fantasiadxb.com
								</a>
							</li>
							<li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
								<Phone className="w-4 h-4" />
								<a
									href="tel:+971528411575"
									className="hover:text-[var(--brand)] transition-colors"
								>
									+971 52 841 1575
								</a>
							</li>
							<li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
								<MapPin className="w-4 h-4" />
								<span>Dubai, UAE</span>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-4">Services</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#services"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Luxury Event Planning
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Wedding Planning
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Corporate Events
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-muted-foreground hover:text-[var(--brand)] transition-colors"
								>
									Creative Design
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 pb-3 border-t border-border text-center text-sm text-muted-foreground">
					<p>
						&copy; {new Date().getFullYear()} Fantasia DXB. All
						rights reserved.
					</p>
				</div>
				<div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
					<span>Made with</span>
					<Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
					<span>by John (Software Developer)</span>
				</div>
			</div>
		</footer>
	);
}
