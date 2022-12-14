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
import Logo from '../../components/logo'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Self service help desk ">
    <Container>
      <Title>
        Self service help desk <Badge>2022</Badge>
      </Title>
      <P>
      A real world demo (Airport Self Service Kiosk) to stream microphone audio output (WebRTC) to a back-end web application over websockets, and let your conversational AI speak out the answers. A solution built with: Dialogflow for chatbots, Speech to Text, Text to Speech, Websockets, Angular, Node.js, Audio Streaming, WebRTC.

      Resources

      
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular</span>
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
