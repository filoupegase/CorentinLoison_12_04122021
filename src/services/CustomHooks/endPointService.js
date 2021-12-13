/**
 * @param {string} service
 * @param {string} userId
 * @returns {string|null} match endpoint associated to the service and the user id
 */
export function endPointService(service, userId) {
  const ACTIVITIES_URL = `user/${ userId }/performance`;
  const AVERAGE_SESSIONS_URL = `user/${ userId }/average-sessions`;
  const DAILY_ACTIVITY_URL = `user/${ userId }/activity`;
  const KEY_DATA = `user/${ userId }`;
  const USER_URL = `${ userId }`;

  switch (service) {
    case 'getUserName':
      return USER_URL;

    case 'activities':
      return ACTIVITIES_URL;

    case 'average-sessions':
      return AVERAGE_SESSIONS_URL;

    case 'daily-activity':
      return DAILY_ACTIVITY_URL;

    case 'key-data':
      return KEY_DATA;

    case 'today-score':
      return USER_URL;

    default:
      return null;
  }
}