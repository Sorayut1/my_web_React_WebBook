import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1517770413964-df8ca61194a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "1984",
    author: "George Orwell",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1529590003495-b2646e2718bf?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1499051775559-dcb9f02d2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1544717305-996b815c338c",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

function SlideCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(5);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, books.length - visibleCards)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center mb-2 mt-5 px-5">
        <h2 className="text-2xl font-semibold text-center">หนังสือแนะนำ</h2>
        <button className="text-blue-500 hover:text-blue-600 font-semibold  text-sm">ดูทั้งหมด &gt;</button>
      </div>

      <div className="overflow-hidden w-full  px-5">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {books.map((book, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                flexBasis: `${100 / visibleCards}%`,
                maxWidth: `${100 / visibleCards}%`,
              }}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full px-2 flex flex-col">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-600">{book.author}</p>
                  <p className="text-lg font-bold text-green-600">{book.price}</p>
                  <button className="mt-auto w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 h-full px-4 flex items-center justify-center"
      >
        <ChevronLeftIcon className="w-8 h-8 text-gray-700 bg-white rounded-full shadow-md" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 h-full px-4 flex items-center justify-center"
      >
        <ChevronRightIcon className="w-8 h-8 text-gray-700 bg-white rounded-full shadow-md" />
      </button>
    </div>
  );
}

export default SlideCard;
