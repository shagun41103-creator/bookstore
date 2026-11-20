
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Course() {
  const [book, setBook] = useState([]);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/book`);
        // console.log(res.data);
        setBook(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };

    getBook();

    const getCourse = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/course/get`);
        console.log(res.data);
        setCourse(res.data);
        // console.log("Course data:", course);
      } catch (error) {
        console.log(error);
      }
    };

    getCourse();
  }, []);

  return (
    <>
    <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>

          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>

        
        </div>

        {/* Books List */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-x-50 gap-y-0">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

        {/* Courses List */}
  
      </div>
    </>
  );
}

export default Course;
