import React from "react";
import HomeBanner from "./HomeBanner";
import BannerImage from "../images/woman-working-flower-shop.jpg";
import HomeItemList from "./HomeItemList";

function Home() {
  return (
    <div className="w-full px-10 py-6 sm:px-16 md:px-28 lg:px-40">
      <section className="flex flex-col justify-center items-center">
        <HomeBanner title="Mother's Day" img={BannerImage} />
        <HomeItemList />
        <p className="text-3xl font-semibold my-5">What We Do</p>
        <div className="flex w-full justify-center">
          <div className="w-1/3 border border-text">
            <p className="text-center h-14">Share JOY with loved one</p>
            <img src="" alt="items" className="" />
          </div>
          <div className="w-1/3 border border-text">
            <p className="text-center h-14">Customize your ingredient of JOY</p>
            <img src="" alt="customize" className="" />
          </div>
          <div className="w-1/3 border border-text">
            <p className="text-center h-14">Deliever JOY</p>
            <img src="" alt="delivery" className="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
