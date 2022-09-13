/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Link, Button, Grid, Flex } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import BlogPost from 'components/blog-post';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import Subscribe from '../sections/subscribe';
import Date from '../components/date';

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
      <Container>
        <Flex sx={styles.header}>
          <Logo src={LogoDark}/>
          <Link href='/' sx={styles.button}>
            <Button 
              className='donate__btn' 
              variant='secondary'
              aria-label='Home Page'>
                Home Page
            </Button>
          </Link>
        </Flex>

        <Grid sx={styles.grid}>
          {allPostsData.map(({ id, thumbnail, date, title, excerpt, author }) => (
            <BlogPost
              key={id}
              postLink={`/blog/${id}`}
              src={thumbnail}
              title={title}
              excerpt={excerpt}
              date={ <Date dateString={date} />}
              authorName={author}
            />
          ))}
        </Grid>
        <Subscribe/>
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
  button: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
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