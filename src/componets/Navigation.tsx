import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavigationWrapper = styled.div`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: calc(10px + 1.5vmin);
  color: white;
`;


const  Navigation:React.FC = () => <NavigationWrapper>
  <NavButton to='/' lable='What is' />
  <NavButton to='/self-sovereign_identity' lable='Identity' />
  <NavButton to='/addresses' lable='Adresses' />
  <NavButton to='/how_to' lable='How to' />
  <NavButton to='/sdk' lable='SDK'/>
  <NavButton to='/features' lable='Features'/>
  <NavButton to='/links' lable='Links'/>
  <NavButton to='/protocol' lable='Protocol'/>
  <NavButton to='/roadmap' lable='Roadmap'/>
</NavigationWrapper>;

export default Navigation;
