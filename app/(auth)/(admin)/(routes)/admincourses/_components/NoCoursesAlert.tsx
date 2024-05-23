import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export function NoCoursesAlert() {
	return (
		<Alert variant="info" className="my-6">
			<TriangleAlert className="h-4 w-4" />
			<AlertTitle className="uppercase text-sm font-semibold">
				No courses
			</AlertTitle>
			<AlertDescription>
				There is no course in the database.{" "}
				<Link
					href={`/admincreatecourse`}
					className="underline text-black"
				>
					Create a course today
				</Link>
			</AlertDescription>
		</Alert>
	);
}
