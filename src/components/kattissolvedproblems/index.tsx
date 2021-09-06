import styles from './kattissolvedproblems.module.scss';
import { useState, useEffect } from 'react';
import ScrollList from '@/components/scrolllist';

type KattisSolvedProblem = {
  id: number;
  name: string;
  href: string;
  fastest: string;
  mine: string;
  topplace: string | null;
  tophref: string | null;
};

export default function KattisSolvedProblems() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<KattisSolvedProblem[] | null>(null);

  useEffect(() => {
    async function fetchData(firstTime: boolean) {
      if (firstTime) setLoading(true);
      if (firstTime) setError(false);

      let noRefresh = true;
      let json: KattisSolvedProblem[];
      try {
        const result = await fetch('https://sveinnthorarins-kattis-scraper.herokuapp.com/');
        if (!result.ok) throw new Error('result not ok');
        json = await result.json();
      } catch (e) {
        if (firstTime) setError(true);
        return;
      } finally {
        if (firstTime) setLoading(false);
      }
      if (json[0].hasOwnProperty('refresh')) {
        // list is old and server is refreshing it, should query again in a bit
        // remove refresh notification object from array
        json.splice(0, 1); // now json array contains the old list, not refreshed
        // query again in 60 secs for the refreshed list
        noRefresh = false;
        setTimeout(() => fetchData(false), 60000);
      }
      if (firstTime || noRefresh) setData(json);
    }
    fetchData(true);
  }, []);

  if (error) {
    return <p className={styles.message}>Couldn&apos;t fetch the solved problems at this time. 🙁</p>;
  }

  if (loading) {
    return <p className={styles.message}>Fetching...</p>;
  }

  if (!data) {
    return <p className={styles.message}>No solved problems.</p>;
  }

  return (
    <ScrollList>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Fastest</th>
            <th>Mine</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item): JSX.Element => {
              return (
                <tr className={styles.problem} key={item.id}>
                  <td>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </td>
                  <td>{item.fastest}</td>
                  <td>{item.mine}</td>
                  <td>
                    {item.topplace === null || item.tophref === null ? undefined : (
                      <a href={item.tophref} target="_blank" rel="noreferrer">{`Top ${item.topplace}`}</a>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </ScrollList>
  );
}
