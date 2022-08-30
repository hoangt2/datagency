/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import ProfilePic from 'assets/profile-pic.png';


const data = {
  subTitle: 'About Me',
  title: 'I am an experienced data analyst based in Helsinki',
  description:
    'I develop powerful data analytics strategies and solutions that help startups and growing companies utilise their data and achieve their business visions. I have years of experience working with data analytics in the banking and fintech sector, which makes me understand and fulfil the emerging data needs of growing companies with efficient and scaleable data analytics solutions.',
  btnName: 'Connect with me on LinkedIn',
  btnURL: 'https://www.linkedin.com/in/httung/',
};

export default function CoreFeature() {
  return (
    <section id='about' sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={ProfilePic} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null , null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    pt: [7, 7, 7, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 400, 600, 800, null, 900],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'flex',
    '> img': {
      zIndex: 1,
      width: ['50%', '50%', '50%','80%'],
    },
    justifyContent: 'center',
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
