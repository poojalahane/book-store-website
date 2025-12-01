import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  //console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3 flex flex-col items-center justify-center">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.name}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 p-2">
                Buy Now
              </div>
              <Link to={`/pdf/${item.id}`}>
                <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200 p-2">
                  Read Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
