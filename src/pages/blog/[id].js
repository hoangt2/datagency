
import { getAllPostIds, getPostData } from '../../../lib/posts';
import { ThemeProvider, Container, Flex, Heading, Link, Button, Box, Image } from 'theme-ui';
import theme from 'theme';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
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
      <ThemeProvider theme={theme}>
          <Container>
            <Flex sx={styles.header}>
              <Logo src={LogoDark}/>
              <Link href='/blog' sx={styles.button}>
              <Button 
              className='donate__btn' 
              variant='secondary'
              aria-label='Blog'>
                Back To Blog
              </Button>
              </Link>
            </Flex>

            <Box sx={styles.thumbnail}>
              <Image src={postData.thumbnail}/>
            </Box>

            <Heading as="h1" variant="blogHeader">
              {postData.title}
            </Heading>

            <article>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
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
    thumbnail: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
  };
