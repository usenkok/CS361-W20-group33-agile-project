import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import "../components/styles.css"
import AlpacaForm from "../components/addbutton"

function AddButton(){
  return(
    <button id="add-photo-button"> Add New Alpaca </button>
  )
}

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
        <Link to="/">Amazing Alpaca</Link>
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Number of Alpaca</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.nameOfAlpaca}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.introAlpaca}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <AddButton />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___nameOfAlpaca], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            nameOfAlpaca
            introAlpaca
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`