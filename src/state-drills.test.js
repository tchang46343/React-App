import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";

const sectionsProp = [
  {
    title: "Our Founder",
    content:
      "A passionate Full Stack Web Developer, who is a hard worker, and Porsche enthusiast!"
  },
  {
    title: "Gen-Tech",
    content:
      "Gen-Tech is a machine learning data Analytics company! Our company goal is making sure you are informed "
  },
  {
    title: "Contact",
    content: "support@gen-tech.com"
  }
];

describe(`Accordion Component`, () => {
  it("renders empty given no Accordion without errors", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the no sections by default", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("opens any clicked section", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("only opens one section at a time", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    wrapper
      .find("button")
      .at(2)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
