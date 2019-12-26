import tripReducder, { initialState } from "./tripReducer";

describe("trip reducer", () => {
  it("should have a initial state", () => {
    expect(tripReducder(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_TRIP_REQUEST action", () => {
    expect(
      tripReducder(undefined, {
        type: "FETCH_TRIP_REQUEST"
      })
    ).toEqual({
      ...initialState,
      fetchTripRequest: true
    });
  });

  it("should handle FETCH_TRIP_SUCCESS action", () => {
    expect(
      tripReducder(undefined, {
        type: "FETCH_TRIP_SUCCESS",
        res: "A"
      })
    ).toEqual({
      ...initialState,
      fetchTripRequest: false,
      fetchTripSuccess: false,
      data: "A"
    });
  });

  it("should handle FETCH_TRIP_FAIL action", () => {
    expect(
      tripReducder(undefined, {
        type: "FETCH_TRIP_FAIL",
        res: "B"
      })
    ).toEqual({
      ...initialState,
      fetchTripRequest: false,
      fetchTripFail: true,
      error: "B"
    });
  });
});
