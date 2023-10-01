import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import img1 from "../public/img/building-construction-industry-2022-09-27-04-24-17-utc-768x520.jpg";
import img2 from "../public/img/pexels-photo-323772.webp";
import img3 from "../public/img/safety-gate-and-exterior-on-a-modern-house-2023-03-31-01-06-20-utc-1-768x512.jpg";

const Home = () => {
  return (
    <section>
      <div className="relative banner ">
        <div className="over"></div>
        <Image src={img2} alt="" className="" />
      </div>
    </section>
  );
};

export default Home;
