import React, { useEffect } from "react";
import listbook from "../../public/listbook.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
const Courses = () => {
  //console.log(listbook);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const courses = await axios.get("http://localhost:5000/book");
        console.log(courses.data.book);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you {"  "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            labore dolorum recusandae, porro aperiam sequi reprehenderit quo
            quae! Et ut eius neque magnam. Culpa, doloribus! Eaque fugit
            corporis maiores laboriosam pariatur cumque iusto molestias, odio
            impedit. Vero necessitatibus, incidunt optio dignissimos in,
            accusantium, iusto explicabo consequuntur illum atque alias! Sed.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12  grid grid-cols-1 md:grid-cols-4">
          {listbook.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
