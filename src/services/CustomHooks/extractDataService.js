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
  console.log(userData);
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

