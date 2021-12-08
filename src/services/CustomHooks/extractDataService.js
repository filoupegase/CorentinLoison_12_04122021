const ACTIVITY_BY_KIND = {
  1: 'cardio',
  2: 'energie',
  3: 'endurance',
  4: 'force',
  5: 'vitesse',
  6: 'intensité'
};

/**
 * Factory appealing specialized functions to extract data for each service.
 * @param {string|Object} data
 * @param {string} service
 * @returns {null|string|number|Object|array}
 */
export function extractDataService(data, service) {
  if (data) {
    switch (service) {
      case 'firstName':
        return getFirstName(data);
      default:
        return null;
    }
  }
}

/**
 * @param {string} userData
 * @returns {string} user first name
 */
function getFirstName(userData) {
  return userData === 'can not get user'
      ? 'unknown user'
      : userData.data.userInfos.firstName;
}

/**
 * @param {array} userData
 * @returns {array} data for ActivitiesChart
 */
/*
function getActivitiesData(userData) {
  const activities = [];

  if (userData) {
    for (let item of userData) {
      activities.push({
        activity: ACTIVITY_BY_KIND[item.kind],
        value: item.value
      });
    }

    return activities;
  }
}*/
