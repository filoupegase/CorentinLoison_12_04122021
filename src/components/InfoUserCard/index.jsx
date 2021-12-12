import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeColor } from '../../utils/style/colorsStyle';
import iconCalorie from '../../images/icon-calorie.svg';
import iconProteines from '../../images/icon-proteines.svg';
import iconCarbs from '../../images/icon-carbs.svg';
import iconFat from '../../images/icon-fat.svg';


const ICON_TYPE = {
  Calories: 'iconCalorie',
  Proteines: 'iconProteines',
  Glucides: 'iconCarbs',
  Lipides: 'iconFat'
};

const UNIT_TYPE = {
  Calories: 'kCal',
  Glucides: 'g',
  Proteines: 'g',
  Lipides: 'g'
};

const InfoUserCard = function ({ value, type }) {
  return (
      <InfoUserCardContainer>
        <img src={ ICON_TYPE[type] } alt={ type } width="60" height="60" />
        <InfoUserCardData>

          <InfoUserCardMeasure data-testid="card-measure">
            { value !== 0
                ? `${ value }${ UNIT_TYPE[type] }`
                : '-' }
          </InfoUserCardMeasure>


          <InfoUserCardType data-testid="card-type">{ type }</InfoUserCardType>
        </InfoUserCardData>
      </InfoUserCardContainer>
  );
};

InfoUserCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

const InfoUserCardContainer = styled.div`
  display: flex;
  padding: 2rem;
  text-align: left;
  background: ${ themeColor.neutral100 };`;

const InfoUserCardData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 1.5rem;}`;

const InfoUserCardMeasure = styled.div`
  margin: 0.125rem 0;
  font-size: 1.2rem;
  font-weight: 700;`;

const InfoUserCardType = styled.div`
  margin: 0.125rem 0;
  color: ${ themeColor.neutral500 };
`;

export default InfoUserCard;