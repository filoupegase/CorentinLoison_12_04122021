import React from 'react';
import PropTypes from 'prop-types';
import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';

const ChartAverageSessions = function ({ userId }) {
  const { data, error, isLoading } = useSportSeeData('average-sessions', userId);

  let averageSessions = data;

  if (error || isLoading) {
    averageSessions = null;
  }

  return (
      <p>salut</p>
  );
};

ChartAverageSessions.propTypes = {
  userId: PropTypes.string.isRequired
};

export default ChartAverageSessions;