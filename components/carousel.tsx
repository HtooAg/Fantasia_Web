"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
	children: React.ReactNode[];
	itemsPerView?: {
		mobile: number;
		tablet: number;
		desktop: number;
	};
	autoSlide?: boolean;
	autoSlideInterval?: number;
	className?: string;
}

export function Carousel({
	children,
	itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
	autoSlide = false,
	autoSlideInterval = 10000,
	className = "",
}: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);

	// Update items to show based on screen size
	useEffect(() => {
		const updateItemsToShow = () => {
			if (window.innerWidth < 640) {
				setItemsToShow(itemsPerView.mobile);
			} else if (window.innerWidth < 1024) {
				setItemsToShow(itemsPerView.tablet);
			} else {
				setItemsToShow(itemsPerView.desktop);
			}
		};

		updateItemsToShow();
		window.addEventListener("resize", updateItemsToShow);
		return () => window.removeEventListener("resize", updateItemsToShow);
	}, [itemsPerView]);

	const totalPages = Math.ceil(children.length / itemsToShow);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % totalPages);
	}, [totalPages]);

	const prevSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
	}, [totalPages]);

	// Auto slide functionality
	useEffect(() => {
		if (!autoSlide || totalPages <= 1) return;

		const interval = setInterval(nextSlide, autoSlideInterval);
		return () => clearInterval(interval);
	}, [autoSlide, autoSlideInterval, nextSlide, totalPages]);

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className={`relative ${className}`}>
			{/* Carousel Container */}
			<div className="overflow-hidden">
				<motion.div
					className="flex transition-transform duration-500 ease-in-out"
					animate={{
						x: `-${currentIndex * 100}%`,
					}}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				>
					{Array.from({ length: totalPages }).map((_, pageIndex) => (
						<div key={pageIndex} className="flex-shrink-0 w-full">
							<div
								className="grid gap-6"
								style={{
									gridTemplateColumns: `repeat(${itemsToShow}, 1fr)`,
								}}
							>
								{children
									.slice(
										pageIndex * itemsToShow,
										(pageIndex + 1) * itemsToShow
									)
									.map((child, childIndex) => (
										<div key={childIndex} className="px-3">
											{child}
										</div>
									))}
							</div>
						</div>
					))}
				</motion.div>
			</div>

			{/* Navigation Buttons */}
			{totalPages > 1 && (
				<>
					<Button
						variant="default"
						size="icon"
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-lg rounded-full w-12 h-12"
						onClick={prevSlide}
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-5 w-5" />
					</Button>

					<Button
						variant="default"
						size="icon"
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-lg rounded-full w-12 h-12"
						onClick={nextSlide}
						aria-label="Next slide"
					>
						<ChevronRight className="h-5 w-5" />
					</Button>
				</>
			)}

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-4 mt-8">
					{/* Previous Button */}
					<Button
						variant="outline"
						size="sm"
						onClick={prevSlide}
						disabled={currentIndex === 0}
						className="text-sm border-[var(--brand)]/30 hover:border-[var(--brand)] hover:bg-[var(--brand)]/10 disabled:opacity-50"
					>
						Previous
					</Button>

					{/* Page Indicator */}
					<div className="flex items-center gap-2">
						<span className="text-sm text-muted-foreground">
							{currentIndex + 1} of {totalPages}
						</span>
					</div>

					{/* Next Button */}
					<Button
						variant="outline"
						size="sm"
						onClick={nextSlide}
						disabled={currentIndex === totalPages - 1}
						className="text-sm border-[var(--brand)]/30 hover:border-[var(--brand)] hover:bg-[var(--brand)]/10 disabled:opacity-50"
					>
						Next
					</Button>
				</div>
			)}

			{/* Dots Indicator (Alternative) */}
			{totalPages > 1 && (
				<div className="flex justify-center gap-2 mt-4">
					{Array.from({ length: totalPages }).map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								index === currentIndex
									? "bg-[var(--brand)]"
									: "bg-muted-foreground/30 hover:bg-muted-foreground/50"
							}`}
							onClick={() => goToSlide(index)}
							aria-label={`Go to page ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
