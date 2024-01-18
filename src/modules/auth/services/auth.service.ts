import { Endpoints } from '@core/constants';
import { createRoute } from '@core/utils';
import { httpService } from '@core/services';
import { LoginReqDto } from '@modules/auth/dtos';

export namespace AuthService {
	export async function login(body: LoginReqDto): Promise<void> {
		const route = createRoute(Endpoints.LOGIN);
		return httpService.post(route, body).then((res) => res.data);
	}
}
