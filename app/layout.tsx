import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Fantasia DXB - Creative Luxury Event Planning Company Dubai UAE",
	description:
		"Dubai's leading luxury event planning company. Specializing in weddings, corporate events, private celebrations & creative design. 10+ years experience, 500+ successful events. Contact us today!",
	keywords:
		"Dubai events, luxury event planning, wedding planner Dubai, corporate events UAE, event management Dubai, creative design, luxury weddings, event production, Dubai event company, UAE events, private celebrations, gala events, product launches",
	authors: [{ name: "Fantasia DXB" }],
	openGraph: {
		title: "Fantasia DXB - Creative Luxury Event Planning Company Dubai",
		description:
			"Transform your vision into unforgettable experiences with Dubai's leading luxury event planning company. 10+ years experience, 500+ successful events.",
		images: ["/images/fantasiaLogo.jpg"],
		url: "https://fantasiadxb.com",
		siteName: "Fantasia DXB",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Fantasia DXB - Creative Luxury Event Planning Dubai",
		description:
			"Dubai's leading luxury event planning company. Transform your vision into unforgettable experiences.",
		images: ["/images/fantasiaLogo.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
	icons: {
		icon: "/images/fantasiaLogo.jpg",
		shortcut: "/images/fantasiaLogo.jpg",
		apple: "/images/fantasiaLogo.jpg",
	},
	generator: "v0.app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="icon"
					href="/images/fantasiaLogo.jpg"
					type="image/jpeg"
				/>
				<link
					rel="shortcut icon"
					href="/images/fantasiaLogo.jpg"
					type="image/jpeg"
				/>
				<link rel="apple-touch-icon" href="/images/fantasiaLogo.jpg" />
			</head>
			<body
				className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
			>
				<Suspense fallback={null}>
					<ThemeProvider>
						{children}
						<Toaster />
					</ThemeProvider>
				</Suspense>
				<Analytics />
			</body>
		</html>
	);
}
