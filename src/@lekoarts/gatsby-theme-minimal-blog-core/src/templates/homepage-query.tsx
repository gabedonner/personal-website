import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

//this might be where i can dictate the about of posts on homepage
export const query = graphql`
  query ($formatString: String!) {
    allPost(sort: { fields: date, order: DESC }, limit: 5) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
