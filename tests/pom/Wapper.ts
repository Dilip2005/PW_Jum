import { Page } from "playwright";

export abstract class Wrapper {


page:Page


constructor(page: Page) {
	this.page = page;
}


async clearandType(locator: string, text: string) {
try {
	const ele=this.page.locator(locator);
await ele.clear();
await ele.fill(text);
} catch (error) {
	
}
	
}
}

