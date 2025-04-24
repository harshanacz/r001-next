'use client';

import Link from 'next/link';
import { useUser, UserButton } from '@clerk/nextjs';
import HeroSection from '@/components/home/hero-section';
import Navbar from '@/components/home/navbar';

export default function Home() {
  const { user } = useUser();
 
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  bg-gray-100">
      <Navbar/>
      <HeroSection/>
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-10 h-10',
              },
            }}
          />
          <Link href="/dashboard" className="bg-blue-500 text-white p-3 rounded w-full max-w-xs text-center hover:bg-blue-600">
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center">Welcome to the Event App</h1>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Link
              href="/sign-up?role=User"
              className="bg-blue-500 text-white p-3 rounded text-center hover:bg-blue-600"
            >
              Sign in as User
            </Link>
            <Link
              href="/sign-up?role=Organizer"
              className="bg-green-500 text-white p-3 rounded text-center hover:bg-green-600"
            >
              Sign in as Organizer
            </Link>
          </div>
        </>
      )}
    </div>
  );
}