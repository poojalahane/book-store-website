import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import listbook from "../../public/listbook.json";
import Card from "./Card";
import axios from "axios";

const Freebook = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [allBook, setAllBooks] = useState([]);
  const [freeBook, setFreeBooks] = useState([]);
  useEffect(() => {
    const allBooks = async () => {
      const books = await listbook;
      setAllBooks(books);
    };
    const freeBooks = async () => {
      // const books = await listbook.filter((b) => b.category === "free");
      const books = await axios.get("http://localhost:5000/book");
      console.log(books.data.book.filter((b) => b.category === "free"));
      setFreeBooks(books.data.book.filter((b) => b.category === "free"));
    };
    allBooks();
    freeBooks();
  }, []);
  //console.log(allBook);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 color-red">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            laborum dolore maxime dolor natus perferendis accusamus
            consequuntur, culpa hic fugit.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {freeBook.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
//

{
  /* <div className="flex flex-col">
{freeBook.map((b) => {
  return (
    <div className="flex flex-col" key={b.id}>
      <div
        key={b.id}
        className="card bg-base-100 w-96 shadow-xl flex flex-col"
      >
        <figure>
          <img src={`${b.image}`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{b.title}</h2>
          <p>{b.name}</p>
          <p>{b.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
})}
</div> */
}
