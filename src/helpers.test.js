import { convertSecondToHours, convertToLongDate } from "./helpers";

describe("convertSecondToHours", () => {
  it("should return right formatted", () => {
    expect(convertSecondToHours(10000)).toEqual("2h46m40");
  });
});

describe("convertToLongDate", () => {
  it("should return undefined when date string was emptied", () => {
    expect(convertToLongDate("")).toBeUndefined();
  });

  it("should return right formatted", () => {
    expect(convertToLongDate("2017-07-04T07:50:36+0000")).toEqual({
      date: "4 Jul 2017",
      time: "14:50:36"
    });
  });
});
