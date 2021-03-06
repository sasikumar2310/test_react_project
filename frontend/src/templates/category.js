import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"

export const query = graphql`
  query Category($id: Int!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          id
          title
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: allStrapiTags(id: { eq: $id }) {
        Title
    }
  }
`

const Category = ({ data }) => {
  const articles = data.articles.edges
  const category = data.category.Title

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          <ArticlesComponent articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export default Category