import styled from 'styled-components';
import { Paragraph, Title } from '../../components';

export const ProjectSection = styled.section`
  width: 100%;
  min-height: 100dvh;
  overflow: hidden;
`;

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 46px 16px;
`;

export const ProjectTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const ProjectEnterprise = styled(Paragraph)`
  margin-bottom: 20px;
`;

export const ProjectMessage = styled(Paragraph)`
  margin-bottom: 20px;
  max-width: 900px;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
`;

export const TechChip = styled.span`
  border: 1px solid rgba(162, 84, 233, 0.45);
  background-color: rgba(162, 84, 233, 0.15);
  color: #fff;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 13px;
  font-family: 'Inter', sans-serif;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
