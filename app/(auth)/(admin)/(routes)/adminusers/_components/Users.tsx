"use client";

import React, { useEffect, useState } from "react";
import User from "./User";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import SearchBox from "./SearchBox";
import { StepLoader } from "@/components/StepLoader";
import { NoUsersAlert } from "./NoUsersAlert";
import { useSelector } from "react-redux";

interface Users {
	firstName: string;
	lastName: string;
	email: string;
	image: string;
	_id: string;
	phoneNumber: string;
}

type UsersProps = Users[];

const Users = () => {
	const { toast } = useToast();
	const router = useRouter();

	const [users, setUsers] = useState<UsersProps>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		const fetchAllUsers = async () => {
			try {
				setLoading(true);
				const config = {
					headers: {
						"Content-type": "application/json",
						"x-auth-token": userInfo.token,
					},
				};
				const res = await axios.get(`${BASE_URL}${USERS_URL}`, config);

				setUsers(res.data);
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
		fetchAllUsers();
	}, [router, toast, userInfo]);

	if (loading || !users) return <StepLoader />;

	return (
		<>
			<SearchBox successUpdate={(data: UsersProps) => setUsers(data)} />

			{users?.length === 0 && <NoUsersAlert />}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
				{users.map((user) => (
					<User
						key={user._id}
						id={user._id}
						firstName={user.firstName}
						lastName={user.lastName}
						image={user.image}
						email={user.email}
						phoneNumber={user.phoneNumber}
					/>
				))}
			</div>
		</>
	);
};

export default Users;
