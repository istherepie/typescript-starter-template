import { Hello } from "./dummy";

describe("Some dummy test", () => {
	it("Should be equal", () => {
		const expected = "Hello Typescript App";
		const result = Hello();

		expect("equality").toBe("equality");
	});
});
