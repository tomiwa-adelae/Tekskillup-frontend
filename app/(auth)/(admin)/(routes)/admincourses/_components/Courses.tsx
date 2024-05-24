"use client";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import SearchBox from "./SearchBox";
import { StepLoader } from "@/components/StepLoader";
import { NoCoursesAlert } from "./NoCoursesAlert";
import { useSelector } from "react-redux";

interface Courses {
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
}

type CoursesProps = Courses[];

const Courses = () => {
	const { toast } = useToast();
	const router = useRouter();

	const [courses, setCourses] = useState<CoursesProps>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		const fetchAllCourses = async () => {
			try {
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};

				setLoading(true);

				const res = await axios.get(
					`${BASE_URL}${COURSES_URL}`,
					config
				);

				setCourses(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
			} finally {
				setLoading(false);
			}
		};
		fetchAllCourses();
	}, [router, toast]);

	if (loading) return <StepLoader />;

	return (
		<>
			<SearchBox
				successUpdate={(data: CoursesProps) => setCourses(data)}
			/>

			{courses?.length === 0 && <NoCoursesAlert />}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{courses.map((course) => (
					<Course
						key={course._id}
						id={course._id}
						title={course.title}
						image={course.image}
						onlinePrice={course.onlinePrice}
						weekendPrice={course.weekendPrice}
						weekdayPrice={course.weekdayPrice}
						isPublished={course.isPublished}
					/>
				))}
			</div>
		</>
	);
};

export default Courses;
