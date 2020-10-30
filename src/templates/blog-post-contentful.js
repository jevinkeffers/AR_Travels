import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import BlogLayout from "../components/blogLayout"
import SEO from "../components/seo"

const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = this.props.data.contentfulPost
  const siteTitle = this.props.data.site.siteMetadata.title
  const { previous, next } = this.props.pageContext

  return (
    <BlogLayout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.subtitle}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </BlogLayout>
  )
}

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPost( slug: { eq: $slug }) {
      title
      subtitle
      author
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
