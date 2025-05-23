import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import Service from "./Service";
// import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CattleSense: Home</title>
      </Helmet>

      {/* Banner Section */}
      <section className="">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/C6Bnnbn/i-Stock-1277572356-scaled.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center min-w-full p-5">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                <span>
                  <Typewriter
                    words={["Welcome to CattleSense"]}
                    loop={""}
                    cursor
                    cursorStyle="✒️"
                    typeSpeed={20}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="mb-5">
                At CattleSense, we bring the power of IoT technology to
                livestock management, offering a comprehensive, real-time health
                monitoring system for your herd. Our platform tracks key health
                indicators like body temperature, heart rate, and activity
                levels, allowing farmers to detect early signs of health issues
                and improve overall herd welfare. With CattleSense, you gain
                insights that help you make proactive decisions, boost
                productivity, and reduce healthcare costs. Join us at
                CattleSense—where innovative technology meets dedicated animal
                care to support a healthier, more productive herd.
              </p>
              <button className="btn border-0 bg-orange-500 rounded-full">
                Download App <i className="fa-solid fa-arrow-trend-up"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section>
        <Service></Service>
      </section>

      {/* Products */}
      {/* <section>
  <Products></Products>
</section> */}

      {/* FAQ Section */}
      <section className="bg-orange-50">
        <div className=" text-center px-10 pt-10">
          <h1 className="text-5xl font-semibold">Frequently Asked Questions</h1>
          <p className="font-bold mt-5">Some of the questions you might have in mind.</p>
        </div>
        <div className=" px-32 py-20">
          <div className="collapse collapse-plus border bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is CattleSense?
            </div>
            <div className="collapse-content">
              <p>
                CattleSense is an innovative cattle monitoring solution for both
                large and small dairy farms. It uses IoT sensors to proactively
                manage cattle health, detect heat cycles, and improve overall
                well-being and milk productivity.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border bg-white mt-5">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is the Smart Neck Tag, and how does it function?
            </div>
            <div className="collapse-content">
              <p>
                The Smart Neck Tag is a device attached to the cattle's neck. It
                monitors movement and rumination activities, heat cycles, and
                health parameters in real-time. This data helps in detecting
                Heat (estrus) cycles and health status, and it sends alerts to
                optimize cattle breeding times.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border bg-white mt-5">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can CattleSense detect early health issues in cattle?
            </div>
            <div className="collapse-content">
              <p>
                Yes, the neck tag detects changes in activity and behavior that
                may indicate health problems. It alerts you via the app and SMS,
                allowing you to take preventive action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="bg-orange-500 p-20 text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Need Guidance ?</h1>
          <p className="font-bold my-5">We'd love to help you.</p>
          <div className="">
            <button className="btn mr-5 rounded-full m-4">
              <i className="fa fa-whatsapp" aria-hidden="true"></i> Chat on
              whatsapp
            </button>
            <button className="btn rounded-full m-4">
              {" "}
              <i className="fa fa-phone" aria-hidden="true"></i> Call us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
