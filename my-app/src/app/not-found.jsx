"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, Page you looking for is not found</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
