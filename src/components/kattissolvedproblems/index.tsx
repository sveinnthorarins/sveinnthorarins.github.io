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
  const [data, setData] = useState<[KattisSolvedProblem] | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(false);

      let json;
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
      setData(json);
    }
    fetchData();
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
          <a className={styles.problem} href={item.href} key={item.id}>
            {item.name}
          </a>
        );
      })}
    </MultiColumnList>
  )
}
