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
import buildify_1 from "../public/img/buildify_1.jpg";
import testimonial_user from "../public/img/testimonial_user.jpg";
import organizations_1 from "../public/img/organizations_1.png";
// import city_1 from "../public/img/city_1.jpg";

const city_1 = ["/img/city_1.jpg"];

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
      <main className="relative container mx-auto px-16 z-50  pt-[60px] flex flex-col gap-[100px] ">
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
      <section className="relative container mx-auto px-16 py-[80px] flex gap-[20px]">
        {/* one */}
        <div className="w-[40%]">
          <div className="flex items-center pb-[10px]">
            <div className="border_title_aline"></div>
            <span className="text-[#ec7427] uppercase w-[100%] font-bold text-center text-[13px]">
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
                  className="text-[#ec7427] bg-[#fff] px-[10px] w-[20px]"
                />
                Time savings through effective project management
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#ec7427] bg-[#fff] px-[10px] w-[20px]"
                />
                Time savings through effective project management
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#ec7427] bg-[#fff] px-[10px] w-[20px]"
                />
                Time savings through effective project management
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <Link href="#" className="service_btn font-bold ">
                <span className="text-[#000]  ">MORE ABOUT US</span>
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
      {/* === start OUR SERVICES */}
      <section className=" relative py-[80px]  ">
        <div className="over_services"></div>
        <div className="our_services"></div>
        <div className="relative z-10 container mx-auto px-16 py-[10px]  pt-[60px]">
          <div className="text-center  py-[10px]">
            <span className="title_border text-[#ec7427] uppercase  font-bold  text-[13px]">
              OUR SERVICES
            </span>
          </div>
          <h1 className="text-center text-[20px]  text-[#0C1015] font-[800]">
            What We Do
          </h1>
          <p className="text-center text-[15px]  text-[#777] p-[10px] w-[50%] m-auto">
            Our top priority is customer satisfaction, and we work closely with
            clients to understand their unique needs and goals.
          </p>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-6  ">
            {/* item_card_1 */}
            <div className=" ">
              <div className="item_card">
                <Image src={buildify_1} alt="" className="" />
                <div className="text-center  bg-white">
                  <h1 className=" text-[13px] py-[10px] text-[#0C1015]  uppercase hover:text-[#ec7427]  font-[800] ">
                    Residential Construction
                  </h1>
                  <p className="text-center text-[15px]  text-[#777] p-[10px] w-[90%] pb-[20px] m-auto">
                    raesent commodo cursus magna vel quis risus eget urna mollis
                    ornare vel eu rutrum faucibus dolor auctor.
                  </p>
                  <Link
                    href="#"
                    className="service_btn font-bold inline-block my-[20px] "
                  >
                    <span className="text-[#000]  ">Service Details </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* item_card_2 */}
            <div className="">
              <div className="item_card">
                <Image src={buildify_1} alt="" className="" />
                <div className="text-center  bg-white">
                  <h1 className=" text-[13px] py-[10px] text-[#0C1015]  uppercase hover:text-[#ec7427]  font-[800] ">
                    Residential Construction
                  </h1>
                  <p className="text-center text-[15px]  text-[#777] p-[10px] w-[90%] pb-[20px] m-auto">
                    raesent commodo cursus magna vel quis risus eget urna mollis
                    ornare vel eu rutrum faucibus dolor auctor.
                  </p>
                  <Link
                    href="#"
                    className="service_btn font-bold inline-block my-[20px] "
                  >
                    <span className="text-[#000]  ">Service Details </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* item_card_3 */}
            <div className=" ">
              <div className="item_card">
                <Image src={buildify_1} alt="" className="" />
                <div className="text-center  bg-white">
                  <h1 className=" text-[13px] py-[10px] text-[#0C1015]  uppercase hover:text-[#ec7427]  font-[800] ">
                    Residential Construction
                  </h1>
                  <p className="text-center text-[15px]  text-[#777] p-[10px] w-[90%] pb-[20px] m-auto">
                    raesent commodo cursus magna vel quis risus eget urna mollis
                    ornare vel eu rutrum faucibus dolor auctor.
                  </p>
                  <Link
                    href="#"
                    className="service_btn font-bold inline-block my-[20px] "
                  >
                    <span className="text-[#000]  ">Service Details </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* item_card_4 */}
            <div className=" ">
              <div className="item_card">
                <Image src={buildify_1} alt="" className="" />
                <div className="text-center  bg-white">
                  <h1 className=" text-[13px] py-[10px] text-[#0C1015]  uppercase hover:text-[#ec7427]  font-[800] ">
                    Residential Construction
                  </h1>
                  <p className="text-center text-[15px]  text-[#777] p-[10px] w-[90%] pb-[20px] m-auto">
                    raesent commodo cursus magna vel quis risus eget urna mollis
                    ornare vel eu rutrum faucibus dolor auctor.
                  </p>
                  <Link
                    href="#"
                    className="service_btn font-bold inline-block my-[20px] "
                  >
                    <span className="text-[#000]  ">Service Details </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* item_card_5 */}
            <div className=" ">
              <div className="item_card">
                <Image src={buildify_1} alt="" className="" />
                <div className="text-center  bg-white">
                  <h1 className=" text-[13px] py-[10px] text-[#0C1015]  uppercase hover:text-[#ec7427]  font-[800] ">
                    Residential Construction
                  </h1>
                  <p className="text-center text-[15px]  text-[#777] p-[10px] w-[90%] pb-[20px] m-auto">
                    raesent commodo cursus magna vel quis risus eget urna mollis
                    ornare vel eu rutrum faucibus dolor auctor.
                  </p>
                  <Link
                    href="#"
                    className="service_btn font-bold inline-block my-[20px] "
                  >
                    <span className="text-[#000]  ">Service Details </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* item_card_6 */}
            <div className=" ">
              <div className="item_card">
                <Image src={buildify_1} alt="" className="" />
                <div className="text-center  bg-white">
                  <h1 className=" text-[13px] py-[10px] text-[#0C1015]  uppercase hover:text-[#ec7427]  font-[800] ">
                    Residential Construction
                  </h1>
                  <p className="text-center text-[15px]  text-[#777] p-[10px] w-[90%] pb-[20px] m-auto">
                    raesent commodo cursus magna vel quis risus eget urna mollis
                    ornare vel eu rutrum faucibus dolor auctor.
                  </p>
                  <Link
                    href="#"
                    className="service_btn font-bold inline-block my-[20px] "
                  >
                    <span className="text-[#000]  ">Service Details </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="info flex gap-1 items-center justify-center py-[30px]">
            <Link href="#" className="">
              <span className=" text-[#000] hover:text-[#EC7427] transition-all duration-300 ease-in-out flex items-center gap-[10px] font-bold ">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#fff] bg-[#EC7427] p-[2px] rounded-[4px]"
                />
                +88 123 456 789
              </span>
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
      </section>
      {/* === end OUR SERVICES */}
      {/* === start tis */}
      <section className="relative testimonials -mt-[60px] ">
        <div className="over_testimonials"></div>
        <div className="our_testimonials"></div>
        <div className="relative z-10 container mx-auto px-16 py-[10px]  pt-[60px]">
          <div className=" bg-white w-[438px] h-[550px] m-auto rounded-[12px]">
            <div className="text-center  py-[10px]">
              <span className="title_border  text-[#ec7427] uppercase  font-bold  text-[13px]">
                TESTIMONIALS
              </span>
            </div>
            <h1 className="text-center text-[20px] p-[5px] text-[#0C1015] font-[800]">
              What Our Clients Say
            </h1>
            <p className="text-center text-[15px]  text-[#777] p-[10px] pb-[30px] m-auto">
              Our top priority is customer satisfaction, and we work closely
              with clients to understand their unique needs and goals.
            </p>
            {/* card */}
            <div className="card_testimonials bg-[#fbf3ea] w-[80%] pb-[40px]  m-auto rounded-[12px]">
              <div className="card_item_testimonials">
                <div className="img_testimonials p-[10px] pt-[20px]">
                  <Image
                    src={testimonial_user}
                    alt="logo_img"
                    className=" w-[60px] object-cover m-auto border-[2px] border-[#fff] border-solid rounded-[50%] "
                  />
                </div>
                <p className="text-center text-[15px] font-[600]   text-[#0c1015bf] px-[40px] pb-[10px] m-auto">
                  Fusce dapibus tellus ac cursus commodo tortor mauris
                  condimentum nibh ut fermentum massa justo sit amet risus.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Etiam porta sem malesuada magna mollis
                  euismod.
                </p>
                <div className="text-center text-[12px]  text-[#ec7427] font-[800] m-auto">
                  Luke Colman
                </div>
                <div className="text-center text-[15px]  text-[#777]   m-auto">
                  Director, Streich PLC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === end tis */}
      {/* start  */}
      <section className="bg-[#fbf3ea] ">
        <div className="container m-auto px-16 pb-[50px]">
          <div className=" m-auto text-center p-[20px] pt-[50px] ">
            <h1 className="text-[#0C1015] text-[15px] font-bold">
              We have the confidence of hundreds of organizations
            </h1>
          </div>
          <div className=" flex items-center justify-between w-full ">
            <Image
              src={organizations_1}
              alt="logo_img"
              className="w-[100px] opacity-[0.6] h-[40px]"
            />
            <Image
              src={organizations_1}
              alt="logo_img"
              className="w-[100px] opacity-[0.6] h-[40px]"
            />
            <Image
              src={organizations_1}
              alt="logo_img"
              className="w-[100px] opacity-[0.6] h-[40px]"
            />
            <Image
              src={organizations_1}
              alt="logo_img"
              className="w-[100px] opacity-[0.6] h-[40px]"
            />
            <Image
              src={organizations_1}
              alt="logo_img"
              className="w-[100px] opacity-[0.6] h-[40px]"
            />
            <Image
              src={organizations_1}
              alt="logo_img"
              className="w-[100px] opacity-[0.6] h-[40px]"
            />
          </div>
        </div>
      </section>
      {/* end */}
      {/* start PROJECTS */}
      <section className="relative pt-[60px]  testimonials">
        <div className="text-center  py-[10px]">
          <span className="title_border  text-[#ec7427] uppercase  font-bold  text-[13px]">
            RECENT PROJECTS
          </span>
        </div>
        <h1 className="text-center text-[20px]  text-[#0C1015] font-[800]">
          What We Have Done
        </h1>
        <p className="text-center text-[15px]  text-[#777] p-[10px] w-[50%] m-auto">
          Our top priority is customer satisfaction, and we work closely with
          clients to understand their unique needs and goals.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-6 px-[10px]  ">
          <div className="item_ome ">
            <div className="over_testimonials !w-[300px] rounded-[10px]"></div>
            <div
              className="our_projects !w-[300px] rounded-[10px]"
              // style={{ backgroundImage: "url(/img/city_1.jpg)" }}
              style={{ backgroundImage: `url(${city_1})` }}
            ></div>
            <div className="relative z-10 flex justify-center p-[20px] translate-y-[100%] flex-col items-center text-center ">
              <h1 className="text-[#fff]">
                beautiful-night-city-osvitchene-neon-germany-euro{" "}
              </h1>
            </div>
          </div>
          <div className="item_ome ">
            <div className="over_testimonials !w-[300px] rounded-[10px]"></div>
            <div
              className="our_projects !w-[300px] rounded-[10px]"
              // style={{ backgroundImage: "url(/img/city_1.jpg)" }}
              style={{ backgroundImage: `url(${city_1})` }}
            ></div>
            <div className="relative z-10 flex justify-center p-[20px] translate-y-[100%] flex-col items-center text-center ">
              <h1 className="text-[#fff]">
                beautiful-night-city-osvitchene-neon-germany-euro{" "}
              </h1>
            </div>
          </div>
          <div className="item_ome ">
            <div className="over_testimonials !w-[300px] rounded-[10px]"></div>
            <div
              className="our_projects !w-[300px] rounded-[10px]"
              // style={{ backgroundImage: "url(/img/city_1.jpg)" }}
              style={{ backgroundImage: `url(${city_1})` }}
            ></div>
            <div className="relative z-10 flex justify-center p-[20px] translate-y-[100%] flex-col items-center text-center ">
              <h1 className="text-[#fff]">
                beautiful-night-city-osvitchene-neon-germany-euro{" "}
              </h1>
            </div>
          </div>
          <div className="item_ome ">
            <div className="over_testimonials !w-[300px] rounded-[10px]"></div>
            <div
              className="our_projects !w-[300px] rounded-[10px]"
              // style={{ backgroundImage: "url(/img/city_1.jpg)" }}
              style={{ backgroundImage: `url(${city_1})` }}
            ></div>
            <div className="relative z-10 flex justify-center p-[20px] translate-y-[100%] flex-col items-center text-center ">
              <h1 className="text-[#fff]">
                beautiful-night-city-osvitchene-neon-germany-euro{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* end PROJECTS */}
    </section>
  );
};

export default Home;
