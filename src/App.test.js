import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import App from "./App";
import thunk from "redux-thunk";
import { shallowToJson } from "enzyme-to-json";
import configureStore from "redux-mock-store";

const mockStore = configureStore([thunk]);

const initialState = {
  data: {
    trips: []
  }
};

const baseProps = {
  data: {},
  fetchTripRequest: () => null
};

describe("renders App component", () => {
  let store, component;
  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <App {...baseProps} />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it("should dispatch an action on componentDidMount", () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
