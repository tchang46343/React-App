import React, { Component } from "react";
import "./state-drills.css";

export default class Drills extends Component {
  static defaultProps = { drills: [] };

  state = {
    activeSectionIndex: null
  };

  handleSetActiveSection = sectionIndex => {
    this.setState({ activeSectionIndex: sectionIndex });
  };

  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className="Accordion__item" key={idx}>
        <button type="button" onClick={() => this.handleSetActiveSection(idx)}>
          {section.title}
        </button>
        {activeSectionIndex === idx && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { activeSectionIndex } = this.state;
    const { sections } = this.props;
    return (
      <ul className="Accordion">
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    );
  }
}
