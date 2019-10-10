import { ElementFinder, ElementArrayFinder, browser, element, by } from 'protractor';

describe('Flight Search E2E Test', () => {
    let from: ElementFinder;
    let to: ElementFinder;
    let search: ElementFinder;
    let flights: ElementArrayFinder;
    let firstFlight: ElementFinder;
    let card: ElementFinder;

    beforeEach(() => {
        browser.get('http://localhost:4299');
        browser.manage().window().maximize();

        const navigate = element(by.css('[href="/flight-booking/flight-search"]'));
        navigate.click();

        from = element(by.css('input[name=from]'));
        from.clear();
        from.sendKeys('Graz');

        to = element(by.css('input[name=to]'));
        to.clear();
        to.sendKeys('Hamburg');

        search = element(by.cssContainingText('button', 'Search'));
        search.click();

        flights = element.all(by.tagName('app-flight-card'));
        firstFlight = flights.first();
        card = firstFlight.element(by.css('div.card'));
    });

    it('should show one flight cards after search', () => {
        expect(flights.count()).toBe(1);
    });

    it('should verify card background color change: initially/unselected, after mouse click select', () => {
        const selectFlight = firstFlight.element(by.cssContainingText('button', 'Select'));
        const white = 'rgba(255, 255, 255, 1)';
        const selectedColor = 'rgba(204, 197, 185, 1)';

        // Check CSS background-color by name
        let cardBackground = card.getAttribute('style');
        expect(cardBackground).toContain('background-color: white');

        // MouseClick to select flight card
        // Check CSS background-color as RGBA value
        browser.sleep(1000);
        browser.actions().mouseMove(selectFlight).perform();
        browser.actions().click().perform();
        cardBackground = card.getCssValue('background-color');
        expect(cardBackground).toBe(selectedColor);
        browser.sleep(1000);
    });
});
