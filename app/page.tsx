'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Homepage() {
  const router = useRouter();

  useEffect(() => {
    router.push('pages/homepage');
  }, []);

  return null;
}