import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TheDate from "./TheDate";

describe(`TheDate Component`, () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.redner(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip("render the UI as expected", () => {
    expect(renderer.create(<TheDate />).toJSON()).toMatchSnapshot();
  });
});
