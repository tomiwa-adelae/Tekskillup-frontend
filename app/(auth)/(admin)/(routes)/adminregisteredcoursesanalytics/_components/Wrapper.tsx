"use client";

import {
	BASE_URL,
	REGISTERED_COURSES_URL,
	USERS_URL,
} from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import RegisteredCoursesAnalyticsCharts from "./RegisteredCoursesAnalyticsCharts";
import { StepLoader } from "@/components/StepLoader";
import { NoRegisteredCoursesAlert } from "./NoRegisteredCoursesAlert";

import { useSelector } from "react-redux";

const Wrapper = () => {
	const { toast } = useToast();
	const router = useRouter();

	const [registeredCourses, setRegisteredCourses] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		const fetchAllRegisteredCourses = async () => {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};
				const res = await axios.get(
					`${BASE_URL}${REGISTERED_COURSES_URL}`,
					config
				);

				setRegisteredCourses(res.data);
				setLoading(false);
			} catch (error: any) {
				setLoading(false);
				toast({
					variant: "destructive",
					title: "Uh oh! Something went wrong.",
					description: error.response.data.message,
				});
				router.push("/login");
			} finally {
				setLoading(false);
			}
		};
		fetchAllRegisteredCourses();
	}, [toast, router]);

	if (loading) return <StepLoader />;

	return (
		<div className="mt-8">
			<h3 className="text-green-400 text-lg md:text-xl lg:text-2xl mb-6">
				Total registered courses ({registeredCourses?.length})
			</h3>
			{registeredCourses.length === 0 ? (
				<NoRegisteredCoursesAlert />
			) : (
				<RegisteredCoursesAnalyticsCharts courses={registeredCourses} />
			)}
		</div>
	);
};

export default Wrapper;
