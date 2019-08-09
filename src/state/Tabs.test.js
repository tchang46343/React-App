import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Tabs from "./Tabs";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`Tabs Component`, () => {
  const tabsProp = [
    {
      name: "About us",
      content:
        "At InnovateX we provide the highest quality products for the aero Space Industry."
    },
    {
      name: "Services",
      content:
        "We provide aerospace level metal fabrication and computer transitors"
    },
    { name: "Contact", content: "InnovateX@gmail.com" }
  ];

  it("render the first tab by default", () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders empty given no tabs", () => {
    const wrapper = shallow(<Tabs />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("closes the first tab and opens any clicked tab", () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
  });
});
