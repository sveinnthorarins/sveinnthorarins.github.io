import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

function pageView(url: string) {
  // @ts-ignore
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
}

export default function GoogleTagManager(props: PropsWithChildren<{}>) {
  const router = useRouter();
  
  useEffect(() => {
    router.events.on('routeChangeComplete', pageView);
    return () => {
      router.events.off('routeChangeComplete', pageView);
    }
  }, [router.events]);
  
  return <>{props.children}</>;
}
