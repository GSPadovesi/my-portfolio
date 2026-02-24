import styled from "styled-components";
import { Paragraph } from '../../components';

export const Contact = styled.section`
  width: 100%;
  overflow: hidden;
`

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 46px 16px;
  gap: 36px;
`

export const NetworkSocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
` 

export const ContactInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ContactDescription = styled(Paragraph)`
  max-width: 600px;
  align-self: flex-start;
`

export const ContactFormWrapper = styled.div`
  width: 100%;
  align-self: flex-start;
`
