import { useState, useEffect } from 'react';

const DEFAULT_URL = 'http://localhost:8000';

/**
 * Building My Own Hooks
 * Documentation: https://en.reactjs.org/docs/hooks-custom.html
 * Hook used to extract data from useSportSeeData to fill the dashboard.
 * @param {string} service
 * @param {string} userId
 * @returns {undefined|Object}
 */
export function useSportSeeData() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${ DEFAULT_URL }/user/12/performance`;

        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log(data);
        }
      } catch (error) {
        console.error(`An error occured while fetching : ${ error }`);
      } finally {
      }
    }

    fetchData();
  }, []);
  return { data };
}