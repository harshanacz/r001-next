'use client';

import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useUser();

  if (!user) return <div className="flex min-h-screen items-center justify-center bg-gray-100">Loading...</div>;

  const role = user.unsafeMetadata.role || 'User'; 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 bg-gray-100">
      <div className="flex items-center justify-between w-full max-w-md">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-10 h-10',
            },
          }}
        />
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md">
        {role === 'User' && (
          <Link href="/events" className="bg-blue-500 text-white p-3 rounded text-center hover:bg-blue-600">
            View Events
          </Link>
        )}
        {role === 'Organizer' && (
          <Link href="/organizer" className="bg-green-500 text-white p-3 rounded text-center hover:bg-green-600">
            Create Event
          </Link>
        )}
      </div>
    </div>
  );
}