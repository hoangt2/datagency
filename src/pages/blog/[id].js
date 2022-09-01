
import { getAllPostIds, getPostData } from '../../../lib/posts';
import { Container, Box } from 'theme-ui';
//import Head from 'next/head';
//import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <Container>
        <h1>
          <title>{postData.title}</title>
        </h1>
        <article>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Container>
      
    );
  }