import React from 'react';
import styled from 'styled-components';
import { themeColor } from '../../utils/style/colorsStyle';
import Icon from '../../images/iconSportSee.svg';


const Header = function () {
  return (
      <HeaderContainer data-testid="header">

        <LogoLink href="/">
          <img src={ Icon } alt="SportSee" />
        </LogoLink>

        <nav>
          <LinksList>
            <li>
              <HeaderLink href="/">Accueil</HeaderLink>
            </li>
            <li>
              <HeaderLink href="/">Profil</HeaderLink>
            </li>
            <li>
              <HeaderLink href="/">Réglages</HeaderLink>
            </li>
            <li>
              <HeaderLink href="/">Communauté</HeaderLink>
            </li>
          </LinksList>
        </nav>
      </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 16rem 1fr;
  color: ${themeColor.neutral100};
  background: ${ themeColor.neutral900 };
`;

const LogoLink = styled.a`
  padding: 1rem 2rem;
  @media (max-width: 1340px) {
    padding: 0.75rem 1.5rem;
  }
`;

const LinksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  font-weight: 500;
  text-align: center;
`;

const HeaderLink = styled.a`
  padding: 0.5rem 2rem;
  color: white;
  font-size: 24px;
  text-decoration: none;
  font-weight: 500;
  @media (max-width: 1340px) {
    font-size: 24px;
  }
`;


export default Header;