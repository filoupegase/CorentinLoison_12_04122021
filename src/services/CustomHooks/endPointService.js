/**
 * @param {string} service
 * @param {string} userId
 * @returns {string|null} match endpoint associated to the service and the user id
 */
export function endPointService(service, userId) {
  const ACTIVITIES_URL = `${ userId }/performance`;
  const AVERAGE_SESSIONS_URL = `${ userId }/average-sessions`;
  const DAILY_ACTIVITY_URL = `user/${ userId }/activity`;
  const USER_URL = `${ userId }`;

  switch (service) {
    case 'activities':
      return ACTIVITIES_URL;

    case 'average-sessions':
      return AVERAGE_SESSIONS_URL;

    case 'daily-activity':
      return DAILY_ACTIVITY_URL;

    case 'firstName':
      return USER_URL;

    case 'key-data':
      return USER_URL;

    case 'today-score':
      return USER_URL;

    default:
      return null;
  }
}