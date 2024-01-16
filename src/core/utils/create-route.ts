export function createRoute(
	path: string,
	params?: Record<string, string>,
): string {
	const paramsEntries = Object.entries(params ?? {});
	const routeWithMergedParams: string = paramsEntries.reduce(
		(route, item) => {
			return route.replace(`:${item[0]}`, item[1]);
		},
		path,
	);
	return `${routeWithMergedParams}`.replace(/[?]$/, '');
}
