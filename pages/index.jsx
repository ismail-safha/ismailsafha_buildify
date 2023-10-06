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
import city_1 from "../public/img/city_1.jpg";
import blog_img_1 from "../public/img/blog_img_1.jpg";
import blog_main_img from "../public/img/blog_main_img.jpg";
import tem_1 from "../public/img/tem_1.jpg";
import logo from "../public/img/logo3.png";

//font icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
      <section className="relative projects pt-[60px]  testimonials">
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
          <div className="item_ome m-auto ">
            <div className="w-[300px] relative group overflow-hidden">
              <Image
                src={city_1}
                alt="logo_img"
                className="h-[300px] w-full object-cover rounded-[10px] brightness-50 group-hover:filter-none transition-filter duration-300 ease-in-out "
              />
              <h1 className="title_img absolute z-10 top-[10px] text-center py-[124px] m-auto inline-block text-[#fff] text-[18px] font-bold transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110 group-hover:opacity-0">
                beautiful-night-city-osvitchene-neon-germany-euro
              </h1>
            </div>
          </div>
          <div className="item_ome m-auto">
            <div className="w-[300px] relative group overflow-hidden">
              <Image
                src={city_1}
                alt="logo_img"
                className="h-[300px] w-full object-cover rounded-[10px] brightness-50 group-hover:filter-none transition-filter duration-300 ease-in-out "
              />
              <h1 className="title_img absolute z-10 top-[10px] text-center py-[124px] m-auto inline-block text-[#fff] text-[18px] font-bold transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110 group-hover:opacity-0">
                beautiful-night-city-osvitchene-neon-germany-euro
              </h1>
            </div>
          </div>
          <div className="item_ome m-auto">
            <div className="w-[300px] relative group overflow-hidden">
              <Image
                src={city_1}
                alt="logo_img"
                className="h-[300px] w-full object-cover rounded-[10px] brightness-50 group-hover:filter-none transition-filter duration-300 ease-in-out "
              />
              <h1 className="title_img absolute z-10 top-[10px] text-center py-[124px] m-auto inline-block text-[#fff] text-[18px] font-bold transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110 group-hover:opacity-0">
                beautiful-night-city-osvitchene-neon-germany-euro
              </h1>
            </div>
          </div>
          <div className="item_ome m-auto">
            <div className="w-[300px] relative group overflow-hidden">
              <Image
                src={city_1}
                alt="logo_img"
                className="h-[300px] w-full object-cover rounded-[10px] brightness-50 group-hover:filter-none transition-filter duration-300 ease-in-out "
              />
              <h1 className="title_img absolute z-10 top-[10px] text-center py-[124px] m-auto inline-block text-[#fff] text-[18px] font-bold transition-transform duration-300 ease-in-out transform-gpu group-hover:scale-110 group-hover:opacity-0">
                beautiful-night-city-osvitchene-neon-germany-euro
              </h1>
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
      </section>
      {/* end PROJECTS */}
      {/* start BLOG  */}
      <section className="relative projects pt-[60px] container m-auto px-16 testimonials flex justify-between gap-[20px] w-full">
        <div className="w-[50%]">
          <div className="text-center  py-[10px]">
            <span className="title_border  text-[#ec7427] uppercase  font-bold  text-[13px]">
              OUR BLOG
            </span>
          </div>
          <h1 className="text-left text-[20px]  text-[#0C1015] font-[800]">
            Recent Posts
          </h1>
          <p className="text-left text-[15px]  text-[#777] pt-[10px]  m-auto">
            Curabitur blandit tempus porttitor. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et.
          </p>
          <div className="item_blog pt-[20px] flex flex-wrap gap-[20px] ">
            <div className="items_blog">
              <Link href="#">
                <div className="item_blog_img  h-[170px] w-[250px]">
                  <Image
                    src={blog_img_1}
                    alt="logo_img"
                    className=" w-full object-cover rounded-[10px] "
                  />
                </div>
              </Link>
              <Link href="#">
                <h1 className="text-left text-[12px] w-[220px]  text-[#0C1015] hover:text-[#ec7427] font-[800]">
                  Innovative solutions for effective site planning and design
                </h1>
              </Link>
              <p className="text-left text-[15px]  text-[#777] pt-[10px]  m-auto">
                July 13, 2023
              </p>
            </div>
            <div className="items_blog">
              <Link href="#">
                <div className="item_blog_img  h-[170px] w-[250px]">
                  <Image
                    src={blog_img_1}
                    alt="logo_img"
                    className=" w-full object-cover rounded-[10px] "
                  />
                </div>
              </Link>
              <Link href="#">
                <h1 className="text-left text-[12px] w-[220px]  text-[#0C1015] hover:text-[#ec7427] font-[800]">
                  Innovative solutions for effective site planning and design
                </h1>
              </Link>
              <p className="text-left text-[15px]  text-[#777] pt-[10px]  m-auto">
                July 13, 2023
              </p>
            </div>
            <div className="items_blog">
              <Link href="#">
                <div className="item_blog_img  h-[170px] w-[250px]">
                  <Image
                    src={blog_img_1}
                    alt="logo_img"
                    className=" w-full object-cover rounded-[10px] "
                  />
                </div>
              </Link>
              <Link href="#">
                <h1 className="text-left text-[12px] w-[220px]  text-[#0C1015] hover:text-[#ec7427] font-[800]">
                  Innovative solutions for effective site planning and design
                </h1>
              </Link>
              <p className="text-left text-[15px]  text-[#777] pt-[10px]  m-auto">
                July 13, 2023
              </p>
            </div>
            <div className="items_blog">
              <Link href="#">
                <div className="item_blog_img  h-[170px] w-[250px]">
                  <Image
                    src={blog_img_1}
                    alt="logo_img"
                    className=" w-full object-cover rounded-[10px] "
                  />
                </div>
              </Link>
              <Link href="#">
                <h1 className="text-left text-[12px] w-[220px]  text-[#0C1015] hover:text-[#ec7427] font-[800]">
                  Innovative solutions for effective site planning and design
                </h1>
              </Link>
              <p className="text-left text-[15px]  text-[#777] pt-[10px]  m-auto">
                July 13, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="main_img w-[600px] relative">
            <Image
              src={blog_main_img}
              alt="logo_img"
              className=" w-full object-cover rounded-[10px] bg-center h-[650px] "
            />
            <div className="absolute bottom-[7px] left-[11px] bg-black rounded-[10px] w-[150px] text-center">
              <div className=" text-[#ec7427] uppercase  font-bold  text-[30px] pt-[10px]">
                12+
              </div>
              <div className="text-[12px]  text-[#777] font-bold pb-[10px]">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end BLOG  */}
      {/* start vision  */}
      <section className="relative testimonials vision pt-[60px] ">
        <div className="our_testimonials"></div>
        <div className="relative z-10 container mx-auto px-16 py-[10px]  pt-[60px]">
          <div className="text-center  py-[10px]">
            <span className="title_border  text-[#ec7427] uppercase  font-bold  text-[13px]">
              BRING YOUR VISION TO LIFE.
            </span>
          </div>
          <div className="text-center m-auto  w-[500px]">
            <h1 className=" text-[20px] p-[5px] text-[#fff] font-[800]">
              Get started on your dream construction project today.
            </h1>
          </div>
          <div className="info flex gap-[10px] items-center justify-center py-[30px]">
            <Link href="#" className="">
              <span className=" text-[#fff] hover:text-[#EC7427] transition-all duration-300 ease-in-out flex items-center gap-[10px] font-bold ">
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
      {/* end vision  */}
      {/* start footer */}
      <section className="footer relative  bg-[#0c1015] text-[#fff]">
        <div className="flex items-center justify-center pt-[60px] pb-[20px]">
          <FontAwesomeIcon
            className="text-[#fff] pr-2 text-[30px]"
            icon={faInstagram}
          />
          <span>Follow us on Instagram</span>
        </div>
        <div className="container m-auto px-16 pb-[60px] ">
          <div className="grid grid-cols-4 md:grid-cols-4 xl:grid-cols-8 gap-[10px]">
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src={tem_1}
                alt="logo_img"
                className=" rounded-[10px] object-cover max-w-full w-[170px] h-[150px] duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
        {/* start main_footer */}
        <footer className="container m-auto px-16 pb-[40px]">
          <div className="grid grid-cols-1   xl:grid-cols-4 gap-[10px]">
            <div className="">
              {/* logo */}
              <Link href="#">
                <Image
                  src={logo}
                  alt="logo_img"
                  className="h-[90px] w-[90px]"
                />
              </Link>
            </div>
            {/* === */}
            <div className="">
              <h1>Our Services</h1>
            </div>
            {/* === */}
            <div className="">
              <h1>Information</h1>
            </div>
            {/* === */}
            <div className="">
              <Link href="#">SERVICE INQUIRY</Link>
            </div>
          </div>
        </footer>
        {/* end main_footer */}
      </section>
    </section>
  );
};

export default Home;
