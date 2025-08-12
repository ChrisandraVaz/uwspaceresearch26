import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="h-screen flex justify-center items-center text-gray-50 flex-col">
        <h1>Oops!</h1>
        <p className="mt-1">404: Page not found</p>
        <Link to="/" className="mt-5">
          <p className="underline decoration-current hover:text-[#DA7CE8] duration-200">
            Back to Home
          </p>
        </Link>
      </div>
    </>
  );
}
