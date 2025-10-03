"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
	end: number;
	duration?: number;
	suffix?: string;
	className?: string;
}

export function AnimatedCounter({
	end,
	duration = 2000,
	suffix = "",
	className = "",
}: AnimatedCounterProps) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	useEffect(() => {
		if (!isInView) return;

		let startTime: number;
		let animationFrame: number;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);

			// Easing function for smooth animation
			const easeOutQuart = 1 - Math.pow(1 - progress, 4);
			const currentCount = Math.floor(easeOutQuart * end);

			setCount(currentCount);

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [isInView, end, duration]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={
				isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
			}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={className}
		>
			<motion.span
				animate={{
					textShadow: [
						"0 0 0px rgba(139, 101, 67, 0)",
						"0 0 10px rgba(139, 101, 67, 0.5)",
						"0 0 0px rgba(139, 101, 67, 0)",
					],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				{count}
				{suffix}
			</motion.span>
		</motion.div>
	);
}
