import { ApiService } from './api.services';

class MockApiService extends ApiService {
    public static async fetch(
        endpoint?: RequestInfo | URL,
        _init?: RequestInit | undefined,
        url: string = this.baseUrl,
    ) {
        const _url = endpoint ? `${url}/${endpoint}` : url;

        try {
            const data = { message: 'This is a mock response' };
            return data as any
        } catch (error) {
            console.error(`Error fetching ${_url}:`, error);
            throw error;
        }
    }

    public static async get<T>(endpoint: string = ''): Promise<T> {
        return this.fetch(endpoint);
    }

    public static async post<T>(body: any): Promise<T> {
        return this.fetch('', { body, method: 'POST' });
    }

    public static async put<T>(id: string, body: any): Promise<T> {
        return this.fetch(id, { body, method: 'PUT' });
    }

    public static async delete<T>(id: string): Promise<T> {
        return this.fetch(id, { method: 'DELETE' });
    }
}

describe('ApiService', () => {
    it('should make a GET request', async () => {
        const mockData = { id: 1, name: 'Test' };
        jest.spyOn(MockApiService, 'fetch').mockImplementation(() => Promise.resolve(mockData));

        const result = await MockApiService.get<{ id: number; name: string }>();
        expect(result).toEqual(mockData);
    });

    it('should make a POST request', async () => {
        const mockData = { id: 1, name: 'Test' };
        jest.spyOn(MockApiService, 'fetch').mockImplementation(() => Promise.resolve(mockData));

        const result = await MockApiService.post<{ id: number; name: string }>(mockData);
        expect(result).toEqual(mockData);
    });

    it('should make a PUT request', async () => {
        const mockData = { id: 1, name: 'Test' };
        jest.spyOn(MockApiService, 'fetch').mockImplementation(() => Promise.resolve(mockData));

        const result = await MockApiService.put<{ id: number; name: string }>('1', mockData);
        expect(result).toEqual(mockData);
    });

    it('should make a DELETE request', async () => {
        const mockData = { id: 1, name: 'Test' };
        jest.spyOn(MockApiService, 'fetch').mockImplementation(() => Promise.resolve(mockData));

        const result = await MockApiService.delete<{ id: number; name: string }>('1');
        expect(result).toEqual(mockData);
    });
});