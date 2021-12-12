import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';
import InfoUserCard from '../InfoUserCard';


const InfoUserDetail = function ({ userId }) {
  const { data } = useSportSeeData('key-data', userId);

  let keyData = data;

  return (
      <CardsGrid>
        <InfoUserCard type="Calories" value={ keyData.calorieCount } />
        <InfoUserCard type="Proteines" value={ keyData.proteinCount } />
        <InfoUserCard type="Glucides" value={ keyData.carbohydrateCount } />
        <InfoUserCard type="Lipides" value={ keyData.lipidCount } />
      </CardsGrid>
  );
};

InfoUserDetail.propTypes = {
  userId: PropTypes.string.isRequired
};

const CardsGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;
  > * {
    border-radius: 0.25rem;
    overflow: hidden;
  }`;

export default InfoUserDetail;