export interface RefreshTokenResDto {
	access: Token;
	refresh: Token;
}

interface Token {
	token: string;
	expires: string;
}
