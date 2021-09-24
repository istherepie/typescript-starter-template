import { Hello } from "./dummy";

describe("Some dummy test", () => {
	it("Should be equal", () => {
		const result = Hello();

		expect(result).toBe("Hello Typescript App");
	});
});
