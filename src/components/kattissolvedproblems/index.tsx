import styles from './kattissolvedproblems.module.scss';
import { useState, useEffect } from 'react';
import MultiColumnList from '@/components/multicolumnlist';

type KattisSolvedProblem = {
  id: number,
  name: string,
  href: string
};

export default function KattisSolvedProblems() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<KattisSolvedProblem[] | null>(null);

  useEffect(() => {
    async function fetchData(firstTime: boolean) {
      if (firstTime) setLoading(true);
      if (firstTime) setError(false);

      let json: KattisSolvedProblem[];
      try {
        const result = await fetch('https://sveinnthorarins-kattis-scraper.herokuapp.com/');
        if (!result.ok) throw new Error('result not ok');
        json = await result.json();
      } catch (e) {
        setError(true);
        return;
      } finally {
        setLoading(false);
      }
      if (json[0].hasOwnProperty('refresh')) {
        // list is old and server is refreshing it, should query again in a bit
        // remove refresh notification object from array
        json = json.splice(0, 1); // now json array contains the old list, not refreshed
        // query again in 20 secs for the refreshed list
        setTimeout(() => fetchData(false), 20000);
      }
      setData(json);
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
    <MultiColumnList>
      {data && data.map((item): JSX.Element => {
        return (
          <a className={styles.problem} href={item.href} key={item.id} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        );
      })}
    </MultiColumnList>
  )
}
