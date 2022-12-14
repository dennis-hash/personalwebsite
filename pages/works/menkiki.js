import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Food delivery <Badge>2022</Badge>
      </Title>
      <P>
       A food delivery app developed using Flutter and Firebase.
       The app allows users to order food from their favourite restaurants and have it delivered to their location.
       The app has a chatbot that allows voice input to make the user experience more enjoyable.

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flatter, Dialogflow</span>
        </ListItem>
        
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/dennis-hash/food-delivery">
            Bank Portal <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
       
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/food2.png" alt="menkiki" />
        <WorkImage src="/images/works/food3.jpeg" alt="menkiki" />
        <WorkImage src="/images/works/food1.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
