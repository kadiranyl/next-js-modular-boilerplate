'use client';

import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { ENVIRONMENT_CONFIG } from '@core/config';
import { getBearerToken } from '@core/utils';
import { RefreshTokenService, StorageService } from '@core/services';

const httpService = axios.create({
	baseURL: ENVIRONMENT_CONFIG.apiUrl,
});

httpService.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const accessToken = StorageService.get('ACCESS_TOKEN');
		if (accessToken) {
			const headers: AxiosHeaders = new AxiosHeaders();
			headers.set('Authorization', getBearerToken(accessToken));
			config.headers = headers;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

httpService.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const refreshToken: string =
				StorageService.get('REFRESH_TOKEN') ?? '';

			const refreshTokenResponse = await RefreshTokenService.execute({
				refreshToken,
			});

			if (!refreshTokenResponse) throw error;

			if (refreshTokenResponse.access) {
				StorageService.set(
					'ACCESS_TOKEN',
					refreshTokenResponse.access.token,
				);
				StorageService.set(
					'REFRESH_TOKEN',
					refreshTokenResponse.refresh.token,
				);
			}

			originalRequest.headers.Authorization = `Bearer ${refreshTokenResponse.access.token}`;
			return axios(originalRequest);
		}

		throw error;
	},
);

export { httpService };
