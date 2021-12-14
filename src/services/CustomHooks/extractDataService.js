const DEFAULT_ACTIVITY = {
  1: 'Cardio',
  2: 'Energie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité'
};

/**
 * extractDataService
 * Factory appealing specialized functions to extract data for each service.
 * @param {string|Object} data
 * @param {string} service
 * @returns {null|string|number|Object|array}
 */
export function extractDataService(data, service) {
  if (data) {
    switch (service) {
      case 'activities':
        return getActivities(data.data.data);

      case 'daily-activity':
        return getDailyActivity(data);

      case 'average-sessions':
        return getAverageSessions(data.data.sessions);

      case 'getUserName':
        return getFirstName(data);

      case 'today-score':
        return getTodayScore(data);

      case 'key-data':
        return getKeyData(data);

      default:
        return null;
    }
  }
}

/**
 * get the userDate and return the whrite Object
 * path to get all the keyData
 * @param {array.Object} userData
 * @returns {Object}
 */
function getKeyData(userData) {
  return userData === 'can not get user'
      ? null
      : userData.data.keyData;
}

/**
 * get the userData, create an Array,
 * iterate on the Object each el
 * activity, value and return an array
 * @param {array.Object} userData
 * @returns {Object} data for ActivitiesChart
 */
function getActivities(userData) {
  const activities = [];

  if (userData) {
    for (let item of userData) {
      activities.push({
        activity: DEFAULT_ACTIVITY[item.kind],
        value: item.value
      });
    }
    return activities;
  }
}

/**
 * get DefaultAverageSessions for the getAverageSessions func
 * @returns {array.Object} default data for ChartAverageSessions
 */
function getDefaultAverageSessions() {
  const averageSessions = [
    {
      day: 'L',
      sessionLength: 0
    },
    {
      day: 'M',
      sessionLength: 0
    },
    {
      day: 'M',
      sessionLength: 0
    },
    {
      day: 'J',
      sessionLength: 0
    },
    {
      day: 'V',
      sessionLength: 0
    },
    {
      day: 'S',
      sessionLength: 0
    },
    {
      day: 'D',
      sessionLength: 0
    }
  ];

  return averageSessions;
}

/**
 * get the DefaultAverageSessions,
 * i [averageSessions] to [userData]
 * for get the right data from Api
 * @param {Object} userData
 * @returns {Object} data for ChartAverageSessions
 */
function getAverageSessions(userData) {
  let averageSessions = getDefaultAverageSessions();

  for (let index in userData) {
    averageSessions[index].sessionLength = userData[index].sessionLength;
  }
  return averageSessions;
}

/**
 * get data from daily activity url
 * supress '-' and remove year data
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
 * get the user name data from user/:userId url
 * @param {string} userData
 * @returns {string} user first name
 */
function getFirstName(userData) {
  return userData === 'can not get user'
      ? 'unknown user'
      : userData.data.userInfos.firstName;
}

/**
 * get the today Score data from user/:userId url
 * @param {(string|Object)} userData
 * @returns data for ScoreChart Component
 */
function getTodayScore(userData) {
  return userData === 'can not get user' ? 0 : userData.data.todayScore;
}

