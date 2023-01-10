import { sayHello } from "./unit1";

describe("SayHello Unit Test Suites", () => {
  //describe = vient de Jest
  it("should return 'Hello, World'", () => {
    //it = test que l'on va réaliser
    expect(sayHello()).toBe("Hello, World"); //on attend que la fonction retourne "Hello world"
  });

  it("should return 'Hello, Anna'", () => {
    //it = test que l'on va réaliser
    expect(sayHello("Anna")).toBe("Hello, Anna");
  });
});
