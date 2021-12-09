import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { themeColor } from '../../utils/style/colorsStyle';
import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';


const PieChartTodayScore = function ({ userId }) {
  const { data, error } = useSportSeeData('today-score', `user/${ userId }`);

  let score = data;

  if (error) {
    score = 0;
  }

  const pieChartData = [
    { name: 'completed', value: score, fillColor: `${ themeColor.primary }` },
    { name: 'not-completed', value: 1 - score, fillColor: 'transparent' }
  ];

  return (
      <>
        <ScoreChartContainer>
          <ScoreChartTitle>Score</ScoreChartTitle>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={ 160 } height={ 160 }>
              <Pie
                  data={ pieChartData }
                  dataKey="value"
                  innerRadius={ 70 }
                  outerRadius={ 80 }
                  startAngle={ 90 }
                  endAngle={ 450 }
              >
                { pieChartData.map((entry, idx) => (
                    <Cell
                        key={ `${ idx }` }
                        fill={ entry.fillColor }
                        cornerRadius="50%"
                    />))
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <ScoreLabel>
            <ScoreValue>{ `${ 100 * score }%` }</ScoreValue>
            <br />
            de votre
            <br />
            objectif
          </ScoreLabel>
        </ScoreChartContainer>
      </>
  );
};

PieChartTodayScore.propTypes = {
  userId: PropTypes.string.isRequired
};

const ScoreChartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ themeColor.neutral100 };
`;

const ScoreChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 1340px) {
    top: 1rem;
    left: 1rem;
  }
`;

const ScoreLabel = styled.p`
  position: absolute;
  font-size: 1rem;
  text-align: center;
`;

const ScoreValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
`;

export default PieChartTodayScore;