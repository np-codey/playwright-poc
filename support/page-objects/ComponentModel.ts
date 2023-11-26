import { Page } from "@playwright/test";

/**
 * Represents an area of the application that is used across multiple pages.
 */
export abstract class ComponentModel {
    readonly page: Page;
        
    constructor(page: Page) {
        this.page = page;
    }
}