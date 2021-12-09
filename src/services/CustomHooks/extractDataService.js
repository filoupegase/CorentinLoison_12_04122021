/*const ACTIVITY_BY_KIND = {
  1: 'cardio',
  2: 'energie',
  3: 'endurance',
  4: 'force',
  5: 'vitesse',
  6: 'intensité'
};*/

/**
 * Factory appealing specialized functions to extract data for each service.
 * @param {string|Object} data
 * @param {string} service
 * @returns {null|string|number|Object|array}
 */
export function extractDataService(data, service) {
  if (data) {
    switch (service) {
      case 'daily-activity':
        return getDailyActivity(data);

      case 'firstName':
        return getFirstName(data);

      case 'today-score':
        return getTodayScore(data);
      default:
        return null;
    }
  }
}

/**
 * @param {Object} userData
 * @returns {Object} of data for BarChartDailyActivity
 */
function getDailyActivity(userData) {
  if (userData) {
    const pointerSession = userData.data.sessions;
    const dailyActivity = [];

    for (let item of pointerSession) {
      // eslint-disable-next-line no-unused-vars
      // I dont need year data
      const [yyyy, mm, dd] = item.day.split('-');

      dailyActivity.push({
        day: `${ dd }/${ mm }`,
        kilogram: item.kilogram,
        calories: item.calories
      });
    }
    return dailyActivity;
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
 * @param {(string|Object)} userData
 * @returns data for ScoreChart Component
 */
function getTodayScore(userData) {
  return userData === 'can not get user' ? 0 : userData.data.todayScore;
}

