
import { getAllPostIds, getPostData } from '../../../lib/posts';
import { ThemeProvider, Container, Flex, Heading, Link, Button, Box, Image, Text } from 'theme-ui';
import theme from 'theme';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import Subscribe from '../../sections/subscribe';
import Date from '../../components/date';

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
          <Container pb='100px'>
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

            <Box>
              <Box sx={styles.thumbnail}>
                <Image src={postData.thumbnail}/>
              </Box>

              <Heading as="h1" variant="blogHeader">
                {postData.title}
              </Heading>
              
              <Flex sx={styles.postHeader}>
                <Text sx={styles.postHeader.name}>{postData.author}</Text>
                <Text sx={styles.postHeader.date}>{ <Date dateString={postData.date}/> }</Text>
              </Flex>

              <Flex sx={styles.article}>
                <Text dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </Flex>

            </Box>
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
    thumbnail: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
    article: {
      display: 'flex',
      mx: 'auto',
      // flexDirection: 'column',
      alignItems: 'center',
      width: ['100%','90%','70%'],
      pb: '50px',
    },
    postHeader: {
      pt: '50px',
      width: '100%',
      justifyContent: 'space-between',
      alignItem: 'center',
      name: {
        fontSize: [3, null, 4],
        fontWeight: 500,
        color: 'primary',
        lineHeight: 1.4,
      },
      date: {
        fontSize: [3, null, 4],
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },
  };
