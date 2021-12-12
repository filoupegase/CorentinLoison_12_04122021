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

function getFirstName(userData) {
  return userData === 'can not get user'
      ? 'unknown user'
      : userData.data.userInfos.firstName;
}
