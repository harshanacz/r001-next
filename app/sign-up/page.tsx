'use client';

import { SignUp } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') === 'Organizer' ? 'Organizer' : 'User';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Sign up as {role}</h1>
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        afterSignUpUrl="/dashboard"
        appearance={{
          elements: {
            card: 'bg-white shadow-lg p-6 rounded-lg w-full max-w-md',
            button: 'bg-blue-500 text-white p-2 rounded hover:bg-blue-600',
            formFieldLabel: 'font-medium',
          },
        }}
        forceRedirectUrl="/dashboard"
        unsafeMetadata={{ role }}
      />
    </div>
  );
}