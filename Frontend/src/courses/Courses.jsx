import React from "react";
import Navbar from "../components/Navbar";
import MyCourse from "../components/MyCourse";
import Footer from "../components/Footer";
import list from "../../public/list.json";
function Courses() {
  console.log(list);
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <MyCourse />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
