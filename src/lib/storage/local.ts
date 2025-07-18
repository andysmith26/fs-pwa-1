export interface StorageAdapter {
	load<T>(key: string): T | null;
	save<T>(key: string, value: T): void;
	remove(key: string): void;
	clear(): void;
}

export class LocalStorageAdapter implements StorageAdapter {
	load<T>(key: string): T | null {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		} catch (error) {
			console.error(`Failed to load from localStorage: ${error}`);
			return null;
		}
	}

	save<T>(key: string, value: T): void {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`Failed to save to localStorage: ${error}`);
		}
	}

	remove(key: string): void {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error(`Failed to remove from localStorage: ${error}`);
		}
	}

	clear(): void {
		try {
			localStorage.clear();
		} catch (error) {
			console.error(`Failed to clear localStorage: ${error}`);
		}
	}
}

// Convenience functions
export const storage = new LocalStorageAdapter();

export function load<T>(key: string): T | null {
	return storage.load<T>(key);
}

export function save<T>(key: string, value: T): void {
	storage.save(key, value);
}

export function remove(key: string): void {
	storage.remove(key);
}

export function clear(): void {
	storage.clear();
}
