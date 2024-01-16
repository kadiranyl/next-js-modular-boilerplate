import axios from 'axios';
import { RefreshTokenReqDto, RefreshTokenResDto } from '@core/dtos';
import { Endpoints } from '@core/constants';
import { createRoute, getEndpoint } from '@core/utils';

export namespace RefreshTokenService {
	export async function execute(
		body: RefreshTokenReqDto,
	): Promise<RefreshTokenResDto> {
		const route = createRoute(Endpoints.REFRESH_TOKEN);
		const endpoint = getEndpoint(route);
		return axios.post(endpoint, body).then((res) => res.data);
	}
}
