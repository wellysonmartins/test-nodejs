import { sum } from "./sum";

describe("sum", () => {
  let sumResult: number;

  beforeAll(() => {
    sumResult = 10;
  });

  afterAll(() => {
    sumResult = 0;
    console.log(sumResult);
  });

  it("should do sum of 3 + 7 must be 10", () => {
    const result = sum(3, 7);

    expect(result).toBe(sumResult);
  });

  it("should do sum of 5 + 5 must be 10", () => {
    const result = sum(5, 5);

    expect(result).toBe(sumResult);
  });
});
