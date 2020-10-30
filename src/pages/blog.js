import React from "react"
import { Link, graphql } from "gatsby"
import BlogLayout from "../templates/blog-post-contentful"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allContentfulPost.edges

    if (posts.length === 0) {
        return (
        <BlogLayout location={location} title={siteTitle}>
            <SEO title="All posts" />

            <p>
                No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
            </p>
        </BlogLayout>
        )
    }

    return (
        <BlogLayout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
            const title = node.title || node.slug

            return (
                <li key={node.slug}>
                <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                >
                    <header>
                    <h2>
                        <Link to={node.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                        </Link>
                    </h2>
                    </header>
                </article>
                </li>
            )
            })}
        </ol>
    </BlogLayout>
    )
    }

    export default BlogIndex

    export const pageQuery = graphql`
    query {
        site {
        siteMetadata {
                title
            }
        }
        allContentfulPost {
            edges {
                node {
                    title
                    subtitle
                    author
                    slug
                }
            }
        }
    }
    `
