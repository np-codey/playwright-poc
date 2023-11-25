import { Page } from "@playwright/test";

export abstract class ComponentModel {
    readonly page: Page;
        
    constructor(page: Page) {
        this.page = page;
    }
}