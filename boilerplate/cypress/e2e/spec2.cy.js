describe("InputWithFocusButton", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("focuses the input on button click", () => {
		cy.get("input").should("not.be.focused");
		cy.get("button").click();
		cy.get("input").should("be.focused");
		cy.focused().should("have.attr", "type", "text");
	});

	it("updates the word count with multiple spaces", () => {
		const text = "Hello World!";

		cy.get("input").type(text);
		cy.get("button").click();

		cy.get("p").should(
			"have.text",
			`Word count: ${text.trim().split(" ").length}`
		);
	});
	it("shows the value in the input when typing", () => {
		const typedText = "Hello, World!";

		cy.get("input").type(typedText).should("have.value", typedText);
	});
});
