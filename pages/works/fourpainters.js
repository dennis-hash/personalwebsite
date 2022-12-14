import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Self ervice help desk <Badge>2022</Badge>
      </Title>
      <P>
      A web-based system that allows users to ask questions about their flight. The system uses Dialogflow API to understand the user's question and then returns the answer to the user. The system also allows users to ask questions about the flight in English.
      
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular,Dialogflow api,JavaScript</span>
        </ListItem>
        <ListItem>
          
        </ListItem>
        
       
      </List>

     

      <WorkImage src="/images/works/the-four-painters_01.png" alt="walknote" />
      <WorkImage src="/images/works/the-four-painters_02.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
