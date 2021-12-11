import React from 'react';
import { useSportSeeData } from '../../services/CustomHooks/useSportSeeData';


const ActivitiesChart = function ({ userId }) {
  const { data, error, isLoading } = useSportSeeData('activities', userId);

  let activities = data;

  if (error || isLoading) {
    activities = null;
  }

  return (
      <p>salut</p>
  );
};

export default ActivitiesChart;