import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LessonProps {
	_id: string;
	content: string;
}

const Lessons = ({ lessons }: any) => {
	const ref = useRef(null);

	const isInView = useInView(ref);

	return (
		<div ref={ref} className="bg-white py-16">
			<div className="container">
				<h3 className="text-green-400 text-center mb-5 text-2xl lg:text-3xl">
					What you will learn
				</h3>
				<div className="flex flex-col-reverse gap-4 items-center lg:flex-row lg:justify-center mt-10">
					<div className="space-y-6 flex-1">
						{lessons.map((lesson: LessonProps) => (
							<motion.h5
								initial={{ y: 50 }}
								animate={isInView ? { y: 0 } : {}}
								transition={{
									duration: 1,
									delay: 0.2,
									type: "spring",
									stiffness: 120,
								}}
								key={lesson._id}
								className="text-xs md:text-sm"
							>
								<CircleCheckBig className="text-green-400 inline mr-2 w-4 h-4" />
								{lesson.content}
							</motion.h5>
						))}
					</div>
					<motion.div
						initial={{ x: "100vw" }}
						animate={isInView ? { x: 0 } : {}}
						transition={{
							duration: 1,
							delay: 0.2,
							type: "spring",
							stiffness: 120,
						}}
						className="flex-auto flex items-center justify-center"
					>
						<Image
							src={"/learn-icon.svg"}
							alt="Study cap"
							height={1000}
							width={1000}
							className="w-24 h-24 md:w-32 md:h-32 mx-auto"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Lessons;
