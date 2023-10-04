import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

// img
import img1 from "../public/img/building-construction-industry-2022-09-27-04-24-17-utc-768x520.jpg";
import img2 from "../public/img/pexels-photo-323772.webp";
import img3 from "../public/img/safety-gate-and-exterior-on-a-modern-house-2023-03-31-01-06-20-utc-1-768x512.jpg";
import choose_img_1 from "../public/img/CHOOSE _img_1.jpg";
import choose_img_2 from "../public/img/CHOOSE _img_2.jpg";
import choose_img_3 from "../public/img/CHOOSE _img_3.jpg";

//font icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section>
      <div className="relative banner ">
        <div className="over"></div>
        <Image src={img2} alt="" className="" />
      </div>
      {/* =======start banner */}
      <main className="relative z-50  pt-[60px] flex flex-col gap-[100px] ">
        {/* one */}
        <div className="flex flex-col gap-[40px] w-[60%]">
          <div className="border_title">
            <h1 className="text-[#fff] text-[50px] font-[700] uppercase  leading-[1em]">
              Building your vision, brick by brick.
            </h1>
          </div>
          <p className="text-[#ffffffd1] font-[700] text-[15px]  leading-[1.3em] ">
            We are dedicated to providing exceptional construction services to
            our clients. Our team of experienced professionals loves making
            structures that are high-quality, useful, and nice to look at.
          </p>
          <div className=" flex items-center gap-[15px]">
            <Link href="#" className="service_btn ">
              <span className="text-[#fff]">Our Services</span>
            </Link>
            <Link href="#" className="start">
              <span className="text-[#fff]">
                <FontAwesomeIcon
                  className="text-[#fff] pr-2"
                  icon={faPaperPlane}
                />
                Start a Project
              </span>
            </Link>
          </div>
        </div>
        {/* tow */}
        <div className="card flex items-center justify-between mt-[70px] gap-[15px]">
          <div className="card_item bg-[#ec7427]">
            <div className="icon">
              <FontAwesomeIcon
                icon={faUsersGear}
                className="text-[#ec7427] bg-[#fff]"
              />
            </div>
            <div className="info_card text-[#fff]">
              <h1>Experienced Professionals</h1>
              <p>
                Lorem ipsum dolor sit amet elit tellus luctus nec ullamcorper
                mattis, pulvinar dapibus leo
              </p>
            </div>
          </div>
          <div className="card_item bg-[#ec7427]">
            <div className="icon">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-[#ec7427] bg-[#fff]"
              />
            </div>
            <div className="info_card text-[#fff]">
              <h1>Experienced Professionals</h1>
              <p>
                Lorem ipsum dolor sit amet elit tellus luctus nec ullamcorper
                mattis, pulvinar dapibus leo
              </p>
            </div>
          </div>
          <div className="card_item bg-[#ec7427]">
            <div className="icon">
              <FontAwesomeIcon
                icon={faVectorSquare}
                className="text-[#ec7427] bg-[#fff]"
              />
            </div>
            <div className="info_card text-[#fff]">
              <h1>Experienced Professionals</h1>
              <p>
                Lorem ipsum dolor sit amet elit tellus luctus nec ullamcorper
                mattis, pulvinar dapibus leo
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* end Banner */}
      {/* === Start CHOOSE US=== */}
      <section className="relative py-[80px] flex gap-[20px]">
        {/* one */}
        <div className="w-[40%]">
          <div className="flex items-center pb-[10px]">
            <div className="border_title_aline"></div>
            <span className="text-[#ec7427] uppercase w-[100%] text-center text-[13px]">
              Why Choose Us
            </span>
            <div className="border_title_aline"></div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-[#0C1015] font-[900] text-[23px]">
              Experience construction done right.{" "}
            </h1>
            <p className="text-[#494B4F] text-[16px]">
              We offer a full range of services, from pre-construction planning
              to final finishing, to ensure the successful completion of each
              project. Our commitment to safety, quality, and customer
              satisfaction sets us apart from the competition.{" "}
            </p>
            <ul className="text-[#494B4F] text-[16px]">
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#ec7427] bg-[#fff] px-[10px]"
                />
                Time savings through effective project management
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#ec7427] bg-[#fff] px-[10px]"
                />
                Time savings through effective project management
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#ec7427] bg-[#fff] px-[10px]"
                />
                Time savings through effective project management
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <Link href="#" className="service_btn font-bold ">
                <span className="text-[#000]  ">Our Services</span>
              </Link>
              <Link href="#" className="">
                <span className=" text-[#000] hover:text-[#EC7427] transition-all duration-300 ease-in-out flex items-center gap-[10px] font-bold ">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[#fff] bg-[#EC7427] p-[2px] rounded-[4px]"
                  />
                  +88 123 456 789
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* tow */}
        <div className="w-[60%]">
          <div className="flex justify-between items-end choose_img gap-[10px] ">
            <Image
              src={choose_img_1}
              alt="logo_img"
              className="w-[221.181px] h-[380px]"
            />
            <Image
              src={choose_img_2}
              alt="logo_img"
              className="w-[221.181px] h-[450px]"
            />
            <Image
              src={choose_img_3}
              alt="logo_img"
              className="w-[221.181px] h-[520px]"
            />
          </div>
        </div>
      </section>
      {/* End CHOOSE US*/}
    </section>
  );
};

export default Home;
