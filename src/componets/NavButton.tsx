import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavButtonWrapper = styled.div`
  a {
    color: #61dafb;
    text-decoration: none;
    max-height: 100%;
    padding: 1.2rem 0.7rem;
    position: relative;
  }

    a::after {
      content: '';
      position: absolute;
      right: 0;
      top: 20%;
      width: 1px;
      height: 60%;
      background: #61dafb;
    }

  a:hover {
    opacity: 70%;
    box-shadow: #61dafb;
    background: rgba(154,182,204,.3);
    box-shadow:0 10px 25px 0 rgba(154,182,204,.3);
  }
`;

const NavButton: React.FC<{to:string;lable:string,last?:boolean}> = ({to, lable,last}) => <NavButtonWrapper>
  <Link to={to}>{lable}</Link>
</NavButtonWrapper>;

export default NavButton;
