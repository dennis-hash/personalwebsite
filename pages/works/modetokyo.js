import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Bank Portal">
    <Container>
      <Title>
        Bank Portal <Badge>2021</Badge>
      </Title>
      <P>This demo, showcases a dummy banking portal. It includes: Django Rest Framework, Dialogflow, Angular, Socket.io and Kubernetes Engine, Cloud Builder, Pub/Sub, DLP API, NLP API, Google Cloud Storage, Cloud Functions and BigQuery.</P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular,Django rest</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/dennis-hash/bank-portal">
            Bank Portal <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bank1.png" alt="STYLY" />
      <WorkImage src="/images/works/bank2.png" alt="STYLY" />
      <WorkImage src="/images/works/bank3.png" alt="STYLY" />
  
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
