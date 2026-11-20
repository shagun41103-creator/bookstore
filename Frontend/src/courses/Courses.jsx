import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/course";
import Footer from "../components/Footer";
import list from "../../public/list.json";
function Courses() {
  console.log(list);
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
