import React from "react";

function HomeBanner({ title, img }) {
  return (
    <div
      className="bg-primary flex w-full h-96 bg-cover"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img src={img} alt={title} className="w-1/2" /> */}
      <div className="flex-1 w-8/12"></div>
      <div className="w-5/12 relative">
        <div className="bg-primary opacity-60 w-full h-full"></div>
        <div className="absolute top-0 left-0 flex w-full h-full justify-center py-10">
          <p className="text-3xl font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
