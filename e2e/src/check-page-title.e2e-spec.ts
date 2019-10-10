import { browser } from "protractor";

describe('Page Title E2E Test', () => {
    beforeEach(() => {
        browser.get('http://localhost:4299');
    });

    it('should verify the page title', () => {
        const pageTitle = 'Starter';

        expect(browser.getTitle()).toEqual(pageTitle);
    });
});
