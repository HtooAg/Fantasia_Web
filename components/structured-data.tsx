export function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "EventPlanner",
		name: "Fantasia DXB",
		description:
			"Dubai's premier luxury event planning company specializing in weddings, corporate events, private celebrations, and creative design services.",
		url: "https://fantasiadxb.com",
		logo: "https://fantasiadxb.com/images/fantasiaLogo.jpg",
		image: "https://fantasiadxb.com/images/fantasiaLogo.jpg",
		telephone: "+971528411575",
		email: "info@fantasiadxb.com",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Dubai",
			addressCountry: "AE",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "25.2048",
			longitude: "55.2708",
		},
		areaServed: [
			{
				"@type": "City",
				name: "Dubai",
			},
			{
				"@type": "Country",
				name: "United Arab Emirates",
			},
		],
		serviceType: [
			"Event Planning",
			"Wedding Planning",
			"Corporate Events",
			"Creative Design",
			"Event Production",
			"Luxury Events",
		],
		priceRange: "$$$$",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "5.0",
			reviewCount: "100",
		},
		sameAs: [
			"https://www.instagram.com/fantasiadxb",
			"https://www.facebook.com/fantasiadxb",
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
