import React from "react";
import Container from "../container";

function Hero() {
  return (
    <Container>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <h1>hello from hero</h1>
      </div>
    </Container>
  );
}

export default Hero;
