import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Verify Your Email</h1>

          <div className="space-y-4">
            <p className="text-gray-600">
              Please check your email and click the verification link to verify your account.
            </p>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 mb-3">Already verified your email?</p>

              <Link
                href="/login"
                className="inline-block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
              >
                Go to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
