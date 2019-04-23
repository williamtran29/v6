import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@components/layout';
import Hero from '@components/hero';
import About from '@components/about';
import Jobs from '@components/jobs';
import Featured from '@components/featured';
import Projects from '@components/projects';
import Contact from '@components/contact';

import styled from 'styled-components';
import { mixins, Main } from '@styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <MainContainer id="content">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Jobs data={data.jobs.jobsConnection.edges} />
      <Featured data={data.featured.featuresConnection.edges} />
      <Projects data={data.projects.projectsConnection.edges} />
      <Contact data={data.contact.edges} />
    </MainContainer>
  </Layout>
);
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: graphCmsData {
      jobsConnection(where: { status: PUBLISHED }) {
        edges {
          node {
            title
            company
            companyLogo {
              id
              fileName
              url
            }
            location
            description
            dateStart
            dateEnd
            url
          }
        }
      }
    }
    featured: graphCmsData {
      featuresConnection(where: { status: PUBLISHED }) {
        edges {
          node {
            title
            cover {
              id
              fileName
              url
            }
            tech {
              html
              markdown
              raw
              text
            }
            description
            url
            show
          }
        }
      }
    }
    projects: graphCmsData {
      projectsConnection(where: { status: PUBLISHED }) {
        edges {
          node {
            title
            image {
              id
              fileName
              url
            }
            tech {
              html
              markdown
              raw
              text
            }
            description
            url
          }
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
