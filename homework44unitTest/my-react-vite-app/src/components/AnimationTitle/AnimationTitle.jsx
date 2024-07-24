import React from "react";
import gsap from "gsap";

class CAnimation extends React.Component {
  elRef = {};

  componentDidMount() {
    const timeline = gsap.timeline();

    const titleAnimation = gsap.fromTo(
      this.elRef.title,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
    );

    const descriptionAnimation = gsap.fromTo(
      this.elRef.description,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "easeInOut" },
    );

    timeline.add(titleAnimation).add(descriptionAnimation, "-=0.2");
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2 ref={(node) => (this.elRef.title = node)}>Please leave your details. </h2>
        <p ref={(node) => (this.elRef.description = node)}>We will call you back later</p>
      </div>
    );
  }
}

export default CAnimation;