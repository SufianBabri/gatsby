const result = graphql(`{
  file(relativePath: {eq: "headers/headshot.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FLUID)
    }
  }
}
`)