import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/1.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="styly" title="Mfarm" thumbnail={thumbInkdrop}>
            website that helps farmers sell their products online.
          </WorkGridItem>
        </Section>
       <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Self service helpdesk"
            thumbnail={thumbFourPainters}
          >
            A web-based system that allows users to ask questions about their flight.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" 
          thumbnail={thumbMenkiki} title="Bank web portal">
            A dammy bank web portal that allows users to manage their accounts.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Food delivery"
          >
            An app that allows users to order food from their favorite restaurants.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
 
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
