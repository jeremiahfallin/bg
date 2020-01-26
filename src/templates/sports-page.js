import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import NewsRoll from "../components/NewsRoll";
import Content, { HTMLContent } from "../components/Content";

export const SportsPageTemplate = ({
  image,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div
              className="full-width-image margin-top-0"
              style={{
                backgroundImage: `url(${
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "150px",
                  lineHeight: "1",
                  justifyContent: "space-around",
                  alignItems: "left",
                  flexDirection: "column"
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  style={{
                    boxShadow:
                      "#0081c6 0.5rem 0px 0px, #0081c6 -0.5rem 0px 0px",
                    backgroundColor: "#0081c6",
                    color: "white",
                    lineHeight: "1",
                    padding: "0.25em"
                  }}
                >
                  {title}
                </h1>
              </div>
            </div>
            <p>{description}</p>
            <PostContent content={content} />
            <NewsRoll tag={"sports"} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

SportsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const SportsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SportsPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Sports">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        image={post.frontmatter.image}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

SportsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default SportsPage;

export const pageQuery = graphql`
  query SportsPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`;
