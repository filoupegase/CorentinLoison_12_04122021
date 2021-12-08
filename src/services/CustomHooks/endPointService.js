/**
 * @param {string} service
 * @param {string} userId
 * @returns {string|null} match endpoint associated to the service and the user id
 */
export function endPointService(service, userId) {
  const USER_URL = `${ userId }`;

  switch (service) {
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