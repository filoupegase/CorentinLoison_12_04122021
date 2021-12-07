import React from 'react';
import styled from 'styled-components';
import { themeColor } from '../../utils/style/colorsStyle';
import YogaIcon from '../../images/iconYoga.svg';
import SwimIcon from '../../images/iconSwim.svg';
import BikeIcon from '../../images/iconBike.svg';
import DumbbellIcon from '../../images/iconDumbbell.svg';


const NavAside = function () {
  return (
      <>
        <NavAsideContainer>
          <nav
              style={ { display: 'flex', justifyContent: 'center' } }
          >
            <IconList>
              <LinkPicto href="/">
                <ActivityPicto src={ YogaIcon } alt="Yoga/Meditation" />
              </LinkPicto>
              <LinkPicto href="/">
                <ActivityPicto src={ SwimIcon } alt="Natation" />
              </LinkPicto>
              <LinkPicto href="/">
                <ActivityPicto src={ BikeIcon } alt="Cyclisme" />
              </LinkPicto>
              <LinkPicto href="/">
                <ActivityPicto src={ DumbbellIcon } alt="Musculation" />
              </LinkPicto>
            </IconList>
          </nav>
          <Disclaimer>Copyright SportSee 2021</Disclaimer>
        </NavAsideContainer>
      </>
  );
};

const NavAsideContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  color: ${ themeColor.neutral100 };
  background: ${ themeColor.neutral900 };
  @media (max-width: 1340px) {
    max-height: 692px;
  }
`;

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ActivityPicto = styled.img`
  padding: 0.5rem;
`;

const LinkPicto = styled.a`
    background-color:  ${ themeColor.neutral100 };;
    border-radius: 6px;
        margin: 10px;
`;

const Disclaimer = styled.p`
  display: flex;
  align-items: center;
  padding: 3rem 0;
  font-size: 0.8rem;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  @media (max-width: 1340px) {
    padding: 2rem;
  }
`;

export default NavAside;