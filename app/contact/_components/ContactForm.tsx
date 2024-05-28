"use client";

import React, { useRef, useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";

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
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { BASE_URL, CONTACT_URL } from "@/app/slices/constants";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email().min(2, { message: "Email is required!" }),
	subject: z.string().min(2, { message: "Subject is required!" }),
	message: z.string().min(2).max(1000),
	phoneNumber: z
		.string()
		.min(10, { message: "Phone number is required!" })
		.max(11, { message: "Enter valid number" }),
});

const ContactForm = () => {
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
			phoneNumber: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true);
			const config = {
				headers: {
					"Content-type": "application/json",
				},
				withCredentials: true,
			};

			await axios.post(`${BASE_URL}${CONTACT_URL}`, values, config);
			setLoading(false);
			setSuccess(true);
			toast({
				title: "Successful!",
				description:
					"You have successfully send a message. Our lovely team would get back to you😁",
			});
		} catch (error: any) {
			setLoading(false);
			setSuccess(false);
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: error.response.data.message,
			});
		} finally {
			setLoading(false);
			setSuccess(true);
		}
	};

	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div ref={ref}>
			<motion.div
				initial={{ opacity: 0, x: "-100vw" }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{
					duration: 1,
					delay: 0.2,
					type: "tween",
				}}
			>
				<Card className="bg-green-400 shadow-lg rounded-xl py-8 px-8 text-white">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs md:text-sm">
											Name
										</FormLabel>
										<FormControl className="text-black">
											<Input
												placeholder="e.g John Doe"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs md:text-sm">
											Email address
										</FormLabel>
										<FormControl className="text-black">
											<Input
												placeholder="e.g. johndoe@gmail.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phoneNumber"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs md:text-sm">
											Phone number
										</FormLabel>
										<FormControl className="text-black">
											<Input
												placeholder="e.g 08012345678"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs md:text-sm">
											Subject
										</FormLabel>
										<FormControl className="text-black">
											<Input
												placeholder="e.g. Buying courses"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-xs md:text-sm">
											Message
										</FormLabel>
										<FormControl>
											<Textarea
												placeholder="What do you want us to know?"
												className="text-black"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								className="bg-green-200 w-full font-semibold uppercase"
								type="submit"
								disabled={loading || success}
							>
								{loading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
										Please wait
									</>
								) : (
									"Submit"
								)}
							</Button>
						</form>
					</Form>
				</Card>
			</motion.div>
		</div>
	);
};

export default ContactForm;
