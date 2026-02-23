import styled from 'styled-components';
import { Paragraph, Title } from '../../components';

export const ProjectSection = styled.section`
  width: 100%;
  min-height: 100dvh;
  overflow: hidden;
`

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 46px 16px;
`

export const ProjectTitle = styled(Title)`
  margin-bottom: 20px;
`

export const ProjectMessage = styled(Paragraph)`
  margin-bottom: 20px;
`
