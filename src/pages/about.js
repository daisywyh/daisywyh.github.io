import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2> Who am I? </h2>
            <p> Hi! I'm Daisy Wang, a student from Hong Kong interested in a lot of things. Some of these interests include
            bioinformatics, social entrepreneurship, education, music, badminton, and more. I made this page to document
            some of the things I've done (but mostly just to mess around with some web design).  </p>
          <h2> Contact me </h2>
            <p>Not quite sure why you'd want to do that, but just in case:</p>
            <ul>
              <li><a href="mailto:wangyhdaisy@gmail.com">Email me!</a></li>
              <li><a href="https://github.com/daisywyh">Find me on GitHub!</a></li>
              <li><a href="https://www.linkedin.com/in/daisywyh//">Connect (?) with me on LinkedIn!</a></li>
            </ul>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
