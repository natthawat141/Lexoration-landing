import React from "react";
import Tilt from "react-parallax-tilt";

const imgTilts = [
  {
    url: "https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg",
    title: " Web Development",
    info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    salary: "45,000 - 90,000 THB",
  },
  {
    url: "https://www.brickworkindia.com/AdminFiles/Data%20Analysis%20Virtual%20Assistant%20Vs%20Professional%20Data%20Analyst_1.jpg",
    title: "Data Analysis",
    info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    salary: "50,000 - 100,000 THB",
  },
  {
    url: "https://www.kloudhire.com/upload/blog/259/Artificial_Intelligence.jpg",
    title: "Artificial Intelligence",
    info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    salary: "80,000 - 150,000 THB",
  },
];

const TiltCard = ({ className = "", children }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {imgTilts.map((url, index) => (
        <Tilt
          key={index}
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#ffffff"
          glarePosition="all"
          perspective={1000}
          scale={1.05}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          transitionSpeed={1000}
          parallaxBackground={true} // 👈 เปิด parallax background layer
          gyroscope={true} // ✅ เปิดใช้งาน motion sensor บนอุปกรณ์ mobile
          className={`rounded-xl shadow-xl overflow-hidden ${className}`}
          style={{
            width: "300px",
            height: "400px",
            backgroundImage: `url(${url.url})`, // 👈 ตรงนี้จะขยับตาม mouse
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div className="h-full w-full bg-linear-to-t backdrop-blur-xs from-black to-purple-400/20 text-white flex items-center justify-center rounded-2xl p-4">
            <div className="flex flex-col gap-14 ">
              <div className="space-y-6">
                <h1 className="text-2xl font-semibold text-yellow-200">
                  {url.title}
                </h1>
                <p className="text-sm text-purple-200">{url.info}</p>
              </div>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg">
                {url.salary}
              </button>
            </div>
            {children}
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default TiltCard;
