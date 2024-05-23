"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface CoursesProps {
	_id: string;
	user: string;
	title: string;
	isPublished: boolean;
	lessons: {}[];
	description: string;
	image: string;
	onlinePrice: number;
	weekendPrice: number;
	weekdayPrice: number;
	weekendStartDate: string;
	weekdayStartDate: string;
}

export function CoursesSlider({ courses }: { courses: CoursesProps[] }) {
	return (
		<div className="h-auto rounded-xl flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards
				courses={courses}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}
