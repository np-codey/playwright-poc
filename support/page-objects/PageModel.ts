import { Page } from "@playwright/test";

/**
 * Base model for a PageObject representing a page in the application. For page sections that span
 * multiple pages, use ComponentModel.
 */
export abstract class PageModel {
    abstract readonly path: string;
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to the page based on the path definition.
     */
    public async goto() {
        if (this.path === null) {
            throw new Error('Could not go page: the path is not set.');
        }

        await this.page.goto(this.path);
    }
}