import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl">Welcome to My Clerk App</h1>
      <SignedIn>
        <p>Hello, you are signed in!</p>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-12 h-12',
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Sign In
          </button>
        </SignInButton>
        <Link href="/sign-up" className="text-blue-500 underline">
          Sign Up
        </Link>
      </SignedOut>
    </div>
  );
}