"use client";
import { CircleUserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";

import { useSelector } from "react-redux";
import Image from "next/image";
import Moment from "react-moment";
import User from "../../adminusers/_components/User";

interface UserProps {
	id: string;
	firstName: string;
	lastName: string;
	image: string;
	email: string;
	phoneNumber: string;
}

const Head = () => {
	const [user, setUser] = useState<UserProps>();
	const { userInfo } = useSelector((state: any) => state.auth);

	useEffect(() => {
		if (!userInfo) {
			return;
		}
		setUser(userInfo);
	}, [userInfo]);

	if (!user) return;

	return (
		<div>
			<h5 className="text-sm md:text-base font-medium text-green-400">
				<Moment format="DD-MMM-YYYY">{Date.now()}</Moment>
			</h5>
			<div>
				<div className="flex flex-col md:flex-row items-center justify-between my-8 gap-4">
					<div className="flex flex-col md:flex-row items-center justify-start gap-4">
						<Image
							src={
								user?.image ||
								"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
							}
							alt={user?.firstName || "USER"}
							height={1000}
							width={1000}
							className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full md:mx-auto"
						/>
						<div className="space-y-4 text-center md:text-left">
							<h1 className="text-green-400 text-2xl lg:text-3xl">
								{user?.firstName} {user?.lastName}
							</h1>
							<h5 className="text-xs md:text-sm">
								{user?.email}
							</h5>
							<h5 className="text-xs md:text-sm">
								{user?.phoneNumber}
							</h5>
						</div>
					</div>

					<div className=" mt-4 md:mt-0">
						<DropDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Head;
