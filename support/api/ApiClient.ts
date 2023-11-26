import { APIRequestContext } from '@playwright/test';

/**
 * Wrapper for calling the API under test.
 */
export class APIClient {
    readonly reqContext: APIRequestContext;
    readonly headers;

    /**
     * @param request The Playwright request context.
     */
    constructor(request: APIRequestContext) {
        this.reqContext = request;
    }
}