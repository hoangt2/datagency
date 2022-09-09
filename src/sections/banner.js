/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Link, Button } from 'theme-ui';
import BannerImg from 'assets/banner.png';
import ShapeLeft from 'assets/shape-left.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Datagency is your trusted data analytics partner
          </Heading>
          <Text as="p" variant="heroSecondary">
          We provide data analytics consulting and implementation services to grow your business
          </Text>
          <Link href='https://www.linkedin.com/in/httung/'>
              <Button 
              variant='primary'
              aria-label='start'>
                Start Your Journey
              </Button>
            </Link>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    overflow: 'hidden',
    // backgroundImage: `url(${BannerImg})`,
    // backgroundSize: 'cover',
    backgroundColor: '#FCF4EF',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 170,
      left: -50,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '40%',
    },

    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
  },
};
