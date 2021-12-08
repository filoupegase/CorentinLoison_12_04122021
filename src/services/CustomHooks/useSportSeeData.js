import { useState, useEffect } from 'react';
import { endPointService } from './endPointService';
import { extractDataService } from './extractDataService';

const DEFAULT_URL = 'http://localhost:8000';

/**
 * Building My Own CustomHooks
 * Documentation: https://en.reactjs.org/docs/hooks-custom.html
 * Hook used to extract data from useSportSeeData to fill the dashboard.
 * @param {string} service
 * @param {string} userId
 * @returns {undefined || Object}
 */
export function useSportSeeData(service, userId) {
  const [data, setData] = useState({});
  console.log('service', userId);
  const endpoint = endPointService(service, userId);

  useEffect(() => {

    async function fetchData() {
      try {
        const url = `${ DEFAULT_URL }/user/18`;

        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          const extractorData = extractDataService(data, service);
          setData(extractorData);
        }
      } catch (error) {
        console.error(`An error occured while fetching : ${ error }`);
      } finally {
      }
    }

    fetchData();
  }, [service, userId, endpoint]);

  return { data };
}