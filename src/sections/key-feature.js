/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Strategy from 'assets/key-feature/strategy.svg';
import GrowthMarketing from 'assets/key-feature/growth-marketing.svg';
import DataStack from 'assets/key-feature/data-stack.svg';
import Competency from 'assets/key-feature/competency.svg';
import Visualization from 'assets/key-feature/visualization.svg';
import MachineLearning from 'assets/key-feature/machine-learning.svg'

const data = [
  {
    id: 1,
    imgSrc: Strategy,
    altText: 'Data Strategy',
    title: 'Data Strategy',
    text:
      'We help you define a data strategy to support your growing business, outline your data need components to match them with your business strategy and kickstart your data analytics journey.',
  },
  {
    id: 2,
    imgSrc: GrowthMarketing,
    altText: 'Growth Marketing Analytics',
    title: 'Growth Marketing Analytics',
    text:
      'We implement the data tracking tools for you to build and execute a successful Growth Marketing strategy. You will be able to monitor, measure, optimise and improve your marketing plans based on high-quality data.',
  },
  {
    id: 3,
    imgSrc: DataStack,
    altText: 'Modern Data Stack',
    title: 'Modern Data Stack',
    text:
      'We make an assessment of your company’s growth stage and business vision to set up a modern data stack. You will move beyond Google Analytics to start building a scalable data infrastructure with the latest technologies.',
  },
  {
    id: 4,
    imgSrc: Competency,
    altText: 'Data Competency',
    title: 'Data Competency',
    text:
      'Being data-driven is more about the right people and culture than just data. We help you build up the data analytics competence within your company with relevant trainings, team setup and recruitment.',
  },
  {
    id: 5,
    imgSrc: Visualization,
    altText: 'Business Intelligence & Visualization',
    title: 'Business Intelligence & Visualization',
    text: 'Well-designed visualization enables users to generate business insights and make more data-driven decisions. Our expertise in BI tools will help you deliver actionable insights across your company.'
  },
  {
    id: 6,
    imgSrc: MachineLearning,
    altText: 'Advanced Analytics',
    title: 'Advanced Analytics',
    text: 'Machine Learning and data science can unlock the predictive power that is fuelled by the vast amount of data generated from your business.'
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Your Business Goals Achieved With Data Analytics"
          title="Our Services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
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
