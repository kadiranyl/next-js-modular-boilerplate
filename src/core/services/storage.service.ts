import { StorageKey } from '@core/enums';

type StorageKeyType = keyof typeof StorageKey;

export namespace StorageService {
	export function get(key: StorageKeyType): string | null {
		return localStorage.getItem(key);
	}

	export function getParsed<T = any>(key: StorageKeyType): T | null {
		const value = localStorage.getItem(key);
		if (!value) return null;
		return JSON.parse(value);
	}

	export function set(key: StorageKeyType, value: string): void {
		localStorage.setItem(key, value);
	}

	export function remove(key: StorageKey): void {
		localStorage.removeItem(key);
	}

	export function clear(): void {
		localStorage.clear();
	}
}
