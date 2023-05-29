import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="FarmDirect">
    <Container>
      <Title>
      FarmDirect <Badge>2021</Badge>
      </Title>
      <P>
      FarmDirect is an online platform that enables farmers to sell their products directly to consumers.
       It  also allows farmers access the latest information on farming practices and market trends.
       The website has been integrated with Mpesa to allow for online payments.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/dennis-hash/Project2ndYear">
          FarmDirect <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/1.png" alt="STYLY" />
      <WorkImage src="/images/works/2.png" alt="STYLY" />
     
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
