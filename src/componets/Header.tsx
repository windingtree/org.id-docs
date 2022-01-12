import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: calc(10px + 1.5vmin);
  color: white;
`;

const Header: React.FC = ({children}) => <HeaderWrapper>
  {children}
</HeaderWrapper>;

export default Header;
