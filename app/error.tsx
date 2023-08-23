'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import EmptyState from './components/empty-state';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <EmptyState title='uh Oh' subtitle='Something went wrong' />;
}
