"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Pencil, X } from "lucide-react";
import { FaNairaSign } from "react-icons/fa6";
import React, { useState } from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { BASE_URL, COURSES_URL } from "@/app/slices/constants";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
	onlinePrice: z.string().min(2).max(50),
});

const CourseOnlinePrice = ({
	onlinePrice,
	id,
	successUpdate,
}: {
	onlinePrice: number;
	id: string;
	successUpdate: any;
}) => {
	const { toast } = useToast();
	const [editPrice, setEditPrice] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			onlinePrice: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true);
		const config = {
			headers: {
				"Content-type": "application/json",
			},
			withCredentials: true,
		};

		try {
			setLoading(true);

			const res = await axios.put(
				`${BASE_URL}${COURSES_URL}/${id}`,
				values,
				config
			);
			setLoading(false);
			setEditPrice(!editPrice);
			toast({
				title: "Success!",
				description: "You have successfully updated the course price😁",
			});
			successUpdate(res.data);
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
		<Card className="bg-gray-100 p-4 md:p-8 rounded-xl grid-col-1 col-span-2 md:col-span-1">
			<div className="flex items-center justify-between gap-4 mb-3">
				<h4 className="text-base md:text-lg">Online price</h4>
				<Button
					variant="ghost"
					className="transition ease-in-out uppercase hover:bg-gradient-to-r from-green-100 via-gray-100 to-green-100"
					onClick={() => setEditPrice(!editPrice)}
				>
					{editPrice ? (
						<X className="w-4 h-4 mr-2" />
					) : (
						<Pencil className="w-4 h-4 mr-2" />
					)}
					<span className="text-xs font-semibold">
						{editPrice ? "Cancel" : "Edit"}
					</span>
				</Button>
			</div>
			{editPrice ? (
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="onlinePrice"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="relative">
												<Input
													placeholder="e.g 200,000"
													className="pl-8"
													{...field}
												/>
												<FaNairaSign className="absolute top-1/2 left-2 w-4 h-4 text-gray-400 -translate-y-1/2" />
											</div>
										</FormControl>
										<FormDescription className="text-xs md:text-sm">
											This is the online course price.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								className="bg-green-400 uppercase transition-all duration-100 hover:bg-green-500"
								type="submit"
								disabled={loading}
							>
								{loading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
										Please wait
									</>
								) : (
									"Save"
								)}
							</Button>
						</form>
					</Form>
				</div>
			) : (
				<div className="text-xs md:text-sm">
					{onlinePrice ? (
						<p>#{onlinePrice}</p>
					) : (
						<p className="italic font-light">No online price</p>
					)}
				</div>
			)}
		</Card>
	);
};

export default CourseOnlinePrice;
