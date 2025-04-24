import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-100">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        afterSignInUrl="/dashboard"
        appearance={{
          elements: {
            card: 'bg-white shadow-lg p-6 rounded-lg w-full max-w-md',
            button: 'bg-blue-500 text-white p-2 rounded hover:bg-blue-600',
            formFieldLabel: 'font-medium',
          },
        }}
      />
    </div>
  );
}