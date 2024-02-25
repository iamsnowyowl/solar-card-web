'use client';

// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [i, setI] = useState(0);
  // const router = useRouter();
  const router = typeof window !== 'undefined' ? useRouter() : null;
  function move() {
    if (i === 0) {
      setI(1);
      const elem = document.getElementById('myBar');
      let width = 1;
      const id = setInterval(function () {
        if (width >= 100) {
          clearInterval(id);
          setI(0);
          if (router) {
            router.push('/onboarding');
          }
        } else {
          width++;
          if (elem) {
            elem.style.width = width + '%';
          }
        }
      }, 5);
    }
  }

  useEffect(() => {
    move();
    return () => {
      const elem = document.getElementById('myBar');
      if (elem) {
        elem.style.width = '0%'; // Reset the width when component unmounts
      }
    };
  }, []);

  return (
    <main className="flex h-screen flex-col items-center">
      <Image
        src="/full-solar-logo-1.png"
        alt="Hero Image"
        width={218.5}
        height={52.5}
        className="mb-2 mt-[40vh]"
      />
      <p className="text-center text-base text-gray-400">
        Your personal Crypto Cards
      </p>
      <div className="relative mt-3 h-2 w-60 rounded-lg bg-gray-100">
        <div
          id="myBar"
          className="absolute left-0 top-0 h-full rounded-lg bg-orange-500"
          style={{ width: '0%' }}
        ></div>
      </div>
    </main>
  );
}
