import { Page } from "@playwright/test";

export abstract class PageModel {
    abstract readonly path: string;
    readonly page: Page;
        
    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        if (this.path === null) {
            throw new Error('Could not go page: the path is not set.');
        }

        await this.page.goto(this.path);
    }
}