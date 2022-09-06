import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import CoreFeature from '../sections/core-feature';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function IndexPage({allPostsData}) {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Datagency" />
          <Banner />
          <KeyFeature />
          <TestimonialCard />
          <CoreFeature />
          <BlogSection allPostsData={allPostsData}/>
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
