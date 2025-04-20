import data from "../data";
import TiltCard from "./TiltCard";


export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-24 my-16 px-4 sm:px-6 lg:px-8">

      <header
        className="h-64 flex justify-center items-center w-full rounded-tl-4xl overflow-clip"
        style={{
          background:
            "url(https://www.roseofyork.com/wp-content/uploads/2020/12/online-study.jpg) center/cover no-repeat fixed",
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full h-full text-center backdrop-blur-xs bg-black/50 flex justify-center items-center text-white">
          Welcome to Lexoration
        </h1>
      </header>

      <section className="flex flex-col lg:flex-row justify-between gap-8">
        <article className="flex flex-col justify-center gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Lexoration</h2>
          <p className="text-base sm:text-lg">
            Lexoration is a trusted online learning platform offering
            high-quality courses designed by industry professionals. Our mission
            is to empower individuals with the skills and knowledge required to
            thrive in the modern digital world. Whether you're upskilling or
            starting from scratch, we're here to guide you every step of the way.
          </p>
          <button className="bg-purple-500 px-6 py-3 rounded-lg w-fit text-lg sm:text-xl font-bold text-white">
            Get Started
          </button>
        </article>
        <aside className="rounded-2xl overflow-clip mt-8 lg:mt-0">
          <img
            src="https://atse.in/uploads/2025/01/exploring-the-reality-behind-free-online-courses.webp"
            alt="Course Preview"
            className="w-full h-auto"
            loading="lazy"
          />
        </aside>
      </section>

      <main className="space-y-8">
        <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold">
          Explore Our <br /> Courses
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <article
              key={index}
              className="w-full h-72 bg-gray-500 flex justify-stretch items-end hover:scale-105 hover:shadow-2xl shadow-purple-300/50 transition-all duration-300 ease-in-out bg-cover bg-center"
              style={{ backgroundImage: `url(${item.urlimage})` }}
            >
              <div className="p-4 bg-black/40 backdrop-blur-2xl text-white w-full">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-neutral-300">{item.description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/free_online_class.jpeg.jpg"
            alt="Online Courses Benefit"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <article className="grid place-content-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-center lg:text-left">
            Benefit of <br /> Online Courses
          </h2>
          <p className="text-base sm:text-lg text-center lg:text-left">
            Online learning with Lexoration provides flexibility, accessibility,
            and a personalized learning experience. Our programs are crafted to
            align with real-world industry needs, ensuring that what you learn is
            both relevant and practical.
          </p>
          <ul className="space-y-2 text-base sm:text-lg">
            <li className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Learn at your own pace, anytime and anywhere
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Industry-relevant content designed by experts
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Affordable and accessible education for everyone
            </li>
          </ul>
        </article>
      </section>

      <TiltCard/>


      <section className="grid place-content-center gap-8 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">What Our Members Say</h2>
        <article className="space-y-4">
          <p className="text-base sm:text-lg md:text-xl font-semibold md:w-1/2  mx-auto">
            “Lexoration has transformed the way I learn. The courses are incredibly well
            structured, and I feel more confident in my career path than ever before.”
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <img
              src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover"
              alt="Lisa testimonial"
            />
            <p>Lisa Thompson, Product Designer</p>
          </div>
        </article>
      </section>

    </div>
  );
}
