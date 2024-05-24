"use client";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useSelector } from "react-redux";

const formSchema = z.object({
	title: z
		.string()
		.min(3, { message: "The course title is required!" })
		.max(50, { message: "Course title is too long!" }),
});

const FormBox = () => {
	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const { userInfo } = useSelector((state: any) => state.auth);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true);
			const config = {
				headers: {
					"Content-type": "application/json",
					"x-auth-token": userInfo.token,
				},
			};
			const res = await axios.post(
				`${BASE_URL}${COURSES_URL}`,
				values,
				config
			);
			setLoading(false);
			toast({
				title: "Success!",
				description: "You have successfully created a course😁",
			});
			router.push(`/admincourses/${res.data._id}`);
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
	return (
		<Card className="bg-gray-50 mt-8 w-full md:max-w-lg px-4 py-6 md:px-6 md:py-8  space-y-6">
			<h1 className="text-2xl md:text-3xl text-green-400">
				Name your course
			</h1>
			<p className="text-xs md:text-sm">
				What would you like to name your course? Don&apos;t worry, you
				can always change this later
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Course title</FormLabel>
								<FormControl>
									<Input
										placeholder="e.g Advanced web development"
										{...field}
									/>
								</FormControl>
								<FormDescription className="text-xs md:text-sm">
									What would you teach in this course?
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="uppercase" variant="ghost" asChild>
						<Link href="/admincourses">Cancel</Link>
					</Button>
					<Button
						className="ml-4 bg-green-400 uppercase  transition-all duration-100 hover:bg-green-500"
						type="submit"
						disabled={loading}
					>
						{loading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
								Please wait
							</>
						) : (
							"Continue"
						)}
					</Button>
				</form>
			</Form>
		</Card>
	);
};

export default FormBox;
