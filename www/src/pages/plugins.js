import React, { Component } from "react"
import Container from "../components/container"
import logo from "../monogram.svg"
import { rhythm, options } from "../utils/typography"
import presets, { colors } from "../utils/presets"

class Packages extends Component {
  render() {
    return (
      <Container
        css={{
          alignItems: `center`,
          display: `flex`,
          minHeight: `calc(100vh - ${presets.headerHeight})`,
        }}
      >
        <div
          css={{
            display: `flex`,
            flexDirection: `column`,
          }}
        >
          <img
            src={logo}
            css={{
              display: `inline-block`,
              height: rhythm(5.2),
              width: rhythm(5.2),
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
            alt=""
          />
          <h1
            css={{
              fontSize: rhythm(1),
              marginTop: rhythm(1 / 4),
              marginLeft: rhythm(1),
              marginRight: rhythm(1),
              textAlign: `center`,
            }}
          >
            Welcome to the Gatsby Package Library!
          </h1>
          <p
            css={{
              color: colors.gray.calm,
              marginLeft: rhythm(3),
              marginRight: rhythm(3),
              fontSize: rhythm(3 / 4),
              fontFamily: options.headerFontFamily.join(`,`),
              textAlign: `center`,
            }}
          >
            Please use the search bar to find packages that will make your
            blazing-fast site even more awesome.
          </p>
        </div>
      </Container>
    )
  }
}

export default Packages