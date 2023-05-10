export abstract class ApiService {
  protected static baseUrl: string = import.meta.env.VITE_BLOG_API_URL;
  protected static headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
  };

  constructor() { }

  protected static async fetch(
    endpoint?: RequestInfo | URL,
    init?: RequestInit | undefined,
    url: string = this.baseUrl,
  ) {
    const _url = endpoint ? `${url}/${endpoint}` : url;

    try {
      const response = await fetch(_url, {
        headers: this.headers,
        body: JSON.stringify(init?.body),
        ...init,
      });

      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${_url}:`, error);
      throw error;
    }
  }

  protected static async get<T>(endpoint: string = ''): Promise<T> {
    return this.fetch(endpoint);
  }

  protected static async post<T>(body: any): Promise<T> {
    return this.fetch('', { body, method: 'POST' });
  }

  protected static async put<T>(id: string, body: any): Promise<T> {
    return this.fetch(id, { body, method: 'PUT' });
  }

  protected static async delete<T>(id: string): Promise<T> {
    return this.fetch(id, { method: 'DELETE' });
  }
}