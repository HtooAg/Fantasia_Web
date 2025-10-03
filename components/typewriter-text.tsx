"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterTextProps {
	text: string;
	className?: string;
	speed?: number;
	pauseDuration?: number;
	delay?: number;
}

export function TypewriterText({
	text,
	className = "",
	speed = 150,
	pauseDuration = 2000,
	delay = 0,
}: TypewriterTextProps) {
	const [displayText, setDisplayText] = useState("");
	const [isTyping, setIsTyping] = useState(true);
	const [hasStarted, setHasStarted] = useState(delay === 0);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!hasStarted && delay > 0) {
			const delayTimeout = setTimeout(() => {
				setHasStarted(true);
			}, delay);
			return () => clearTimeout(delayTimeout);
		}
	}, [hasStarted, delay]);

	useEffect(() => {
		if (!hasStarted) return;

		let timeout: NodeJS.Timeout;

		if (isTyping) {
			// Typing phase
			if (currentIndex < text.length) {
				timeout = setTimeout(() => {
					setDisplayText(text.slice(0, currentIndex + 1));
					setCurrentIndex(currentIndex + 1);
				}, speed);
			} else {
				// Pause before deleting
				timeout = setTimeout(() => {
					setIsTyping(false);
				}, pauseDuration);
			}
		} else {
			// Deleting phase
			if (currentIndex > 0) {
				timeout = setTimeout(() => {
					setDisplayText(text.slice(0, currentIndex - 1));
					setCurrentIndex(currentIndex - 1);
				}, speed / 2); // Delete faster than typing
			} else {
				// Pause before typing again
				timeout = setTimeout(() => {
					setIsTyping(true);
				}, pauseDuration / 2);
			}
		}

		return () => clearTimeout(timeout);
	}, [currentIndex, isTyping, text, speed, pauseDuration, hasStarted]);

	return (
		<span className={className}>
			{displayText}
			<motion.span
				animate={{ opacity: [1, 0] }}
				transition={{
					duration: 0.8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="inline-block w-0.5 h-[1em] bg-current ml-1"
			/>
		</span>
	);
}
