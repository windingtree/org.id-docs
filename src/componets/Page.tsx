import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  padding: 8px;
  background-color: rgb(${colors.light});
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-width: 400px;
  padding: 25px;
  align-items: flex-start;
  text-align: start;
`;

const Page: React.FC<{
  content?: string | React.ReactNode;
  title: string;
}> = ({title, content, children}) => <PageWrapper>
  <h2>{title}</h2>
  <PageContent>
    {content}
    {children}
  </PageContent>
</PageWrapper>;

export default Page;
