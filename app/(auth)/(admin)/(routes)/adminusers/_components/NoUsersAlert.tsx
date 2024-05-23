import { TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function NoUsersAlert() {
	return (
		<Alert variant="info" className="my-6">
			<TriangleAlert className="h-4 w-4" />
			<AlertTitle className="uppercase text-sm font-semibold">
				No users
			</AlertTitle>
			<AlertDescription>
				There is no users in the database.
			</AlertDescription>
		</Alert>
	);
}
