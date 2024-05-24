import React from "react";
import { Team } from "./Team";

interface TeamsProps {
	name: string;
	image: string;
	position: string;
	facebookLink: string;
	twitterLink: string;
	instagramLink: string;
}
[];

const OurTeams = () => {
	const teams: TeamsProps[] = [
		{
			name: "William Beck",
			image: "/speaker-two.jpg",
			position: "Senior developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "John Smith",
			image: "/speaker-one.jpg",
			position: "Junior frontend developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "Harriet Specter",
			image: "/speaker-three.jpg",
			position: "CEO",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "Jonathan Ross",
			image: "/speaker-one.jpg",
			position: "DevOp",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
		{
			name: "Katie Curie",
			image: "/speaker-three.jpg",
			position: "Full stack developer",
			facebookLink: "/",
			twitterLink: "/",
			instagramLink: "/",
		},
	];

	return (
		<div className="bg-gradient-to-r from-green-100 via-gray-100 to-green-100 py-16">
			<div className="container text-center">
				<h3 className="text-green-400 mb-5 text-2xl lg:text-3xl">
					Meet our team
				</h3>
				<p className="text-xs md:text-sm lg:w-5/6">
					Our team consists of a dynamic and energetic group of young
					professionals who are deeply committed to providing
					exceptional service and going the extra mile.
				</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					{teams.map((team, index) => (
						<Team
							key={index}
							name={team.name}
							image={team.image}
							position={team.position}
							facebookLink={team.facebookLink}
							twitterLink={team.twitterLink}
							instagramLink={team.instagramLink}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurTeams;
