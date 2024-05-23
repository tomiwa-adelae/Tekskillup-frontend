import React from "react";

import { LockKeyhole, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/app/slices/constants";
import { logout, setCredentials } from "@/app/slices/authSlice";

const DropDown = () => {
	const router = useRouter();
	const { toast } = useToast();
	const dispatch = useDispatch();
	const handleLogout = async () => {
		try {
			await axios.post(`${BASE_URL}${USERS_URL}/logout`, {
				withCredentials: true,
			});
			dispatch(logout({ message: "logout" }));
			dispatch(setCredentials(null));
			toast({
				title: "Successful",
				description: "You have successfully logged out",
			});

			router.push("/login");
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		} catch (error: any) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: error.response.data.message,
			});
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="bg-gray-100 uppercase">
					Settings
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href="/editprofile">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<User className="mr-2 h-4 w-4" />
						<span>Edit Profile</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<Link href="/changepassword">
					<DropdownMenuItem className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100">
						<LockKeyhole className="mr-2 h-4 w-4" />
						<span>Change password</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={handleLogout}
					className="transition ease-in-out cursor-pointer py-4 hover:bg-gray-100"
				>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropDown;
