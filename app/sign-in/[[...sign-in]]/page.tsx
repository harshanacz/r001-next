import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            card: 'bg-white shadow-lg p-6 rounded-lg',
          },
        }}
      />
    </div>
  );
}