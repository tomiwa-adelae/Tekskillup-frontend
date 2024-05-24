import Image from "next/image";
import React from "react";
import SmallShowcase from "./SmallShowcase";

export function Showcase() {
	return (
		<div className="py-16 w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
			<div className="container">
				<div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
					<div className="flex-1 text-center lg:text-left space-y-5">
						<h5 className="uppercase text-xs lg:text-sm">
							Know more about us
						</h5>
						<h1 className="text-[44px] leading-relaxed md:text-6xl md:leading-snug lg:text-7xl lg:leading-relaxed text-green-400">
							About us
						</h1>
						<p className="text-xs md:text-sm mt-4">
							Welcome to Tekskillup, your gateway to mastering
							tech and digital skills for a dynamic and
							ever-evolving world. At Tekskillup, we are committed
							to empowering individuals with the knowledge and
							expertise needed to thrive in the digital age.
						</p>
						<h5 className="text-base text-green-400 font-semibold uppercase">
							Our mission:
						</h5>
						<p className="text-xs md:text-sm">
							Tekskillup is on a mission to democratize education,
							making high-quality tech and digital skills
							accessible to everyone. We believe that learning
							should be a lifelong journey, and with the right
							tools and guidance, individuals can unlock their
							full potential and shape the future.
						</p>
						<h5 className="text-base text-green-400 font-semibold uppercase">
							What distinguishes us?
						</h5>
						<p className="text-xs md:text-sm">
							Our platform offers a diverse range of courses
							covering e-commerce, web development, digital
							marketing, and more. Whether you&apos;re a beginner
							or an experienced professional, we have tailored
							programs to suit your learning needs.
						</p>
						<p className="text-xs md:text-sm">
							We believe in learning by doing. Our courses include
							practical, real-world projects that allow you to
							apply your knowledge and build a robust portfolio to
							showcase your skills to future employers.
						</p>
					</div>
					<div className="flex-1">
						<Image
							src={"/about-showcase-img.png"}
							alt={"About page"}
							height={1000}
							width={1000}
							className="w-auto"
						/>
					</div>
				</div>
				<SmallShowcase />
			</div>
		</div>
	);
}
