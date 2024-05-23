import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function NoRegisteredCoursesAlert() {
	return (
		<Alert variant="info" className="my-6">
			<TriangleAlert className="h-4 w-4" />
			<AlertTitle className="uppercase text-sm font-semibold">
				Nothing to show
			</AlertTitle>
			<AlertDescription>
				There is no registered course to showcase in the database.
			</AlertDescription>
		</Alert>
	);
}
