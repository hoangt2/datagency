/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Grid, Flex } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import BlogPost from 'components/blog-post';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({allPostsData}) {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={styles.container}>

        <Flex sx={styles.header}>
          <Logo src={LogoDark}/>
          <Heading as="h1" variant="blogHeader">
            Blog
          </Heading>
        </Flex>

        <Grid sx={styles.grid}>
          {allPostsData.map(({ id, thumbnail, date, title, excerpt, author }) => (
            <BlogPost
              key={id}
              postLink={`/blog/${id}`}
              src={thumbnail}
              title={title}
              excerpt={excerpt}
              date={date}
              authorName={author}
            />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>      
  );
}

const styles = {
  header:{
    pt: '30px',
    pb:'50px',
    justifyContent: 'space-between'
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};