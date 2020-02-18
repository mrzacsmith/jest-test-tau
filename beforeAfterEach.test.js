const setupFirst = () => {
  console.log("Setting up before test runs");
};
const tearDownNow = () => {
  console.log("Finish up after tests");
};

describe("new account creation checks", () => {
  beforeEach(() => setupFirst());
  afterEach(() => tearDownNow());
  test("new account 1 created", () => {
    const account = "account1";
    expect(account).toEqual("account1");
  });

  test("new account 2 created", () => {
    const account = "account2";
    expect(account).toEqual("account2");
  });
});
