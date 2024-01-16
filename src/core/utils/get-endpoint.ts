import { ENVIRONMENT_CONFIG } from '@core/config';

export function getEndpoint(route: string) {
	return ENVIRONMENT_CONFIG.apiUrl + route;
}
