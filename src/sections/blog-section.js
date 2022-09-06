/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Button, Link } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import { FaFileExcel } from 'react-icons/fa';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection({allPostsData}) {
  return (
    <section sx={{ variant: 'section.news' }} id='blog'>
      <Container sx={styles.container}>
        <SectionHeader
          slogan="our blog"
          title="Get updated on insights and tips for data & analytics"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >

            {allPostsData.map(({ id, thumbnail, date, title, excerpt, author }) => (
              <PostCard
                key={id}
                postLink={`/blog/${id}`}
                src={thumbnail}
                title={title}
                excerpt={excerpt}
                date={date}
                authorName={author}
              />
            ))}
          </Carousel>
        </Box>
        
        <Link href='/blog' sx={styles.button}>
          <Button variant="primary" >Read More</Button>
        </Link>
          
      </Container>
    </section>
  );
}

const styles = {
  container: {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    pt: '30px',
    margin: 'auto',
  },
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
