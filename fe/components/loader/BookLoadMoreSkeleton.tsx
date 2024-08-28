// components/loader/BookLoadMoreSkeleton.tsx
import React from "react";
import BookCardSkeleton from "./BookCardSkeleton";

const BookLoadMoreSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </>
  );
};

export default BookLoadMoreSkeleton;
