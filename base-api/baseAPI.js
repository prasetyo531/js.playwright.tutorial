import { request } from 'playwright';

class BaseAPI {
    constructor() {
        this.context = null;
    }

    async init() {
        this.context = await request.newContext();
    }

    async get(url, options = {}) {
        if (!this.context) {
            throw new Error('API context is not initialized. Call init() before making requests.');
        }
        const response = await this.context.get(url, options);
        return response.json();
    }

    async post(url, data, options = {}) {
        if (!this.context) {
            throw new Error('API context is not initialized. Call init() before making requests.');
        }
        const response = await this.context.post(url, {
            ...options,
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });
        return response.json();
    }

    // Add more methods (put, delete, etc.) as needed
}

export default BaseAPI;