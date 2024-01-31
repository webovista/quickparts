import React from "react";
import styles from "./style.module.css";

const index = ({ type }) => {
  let autoImgArray = [];
  let length = 5;
  let minw = 100;

  type == "autoparts"
    ? (length = 88) && (minw = 1900)
    : (length = 9) && (minw = 250);

  for (let i = 1; i <= length; i++) {
    autoImgArray.push(i);
  }

  const imageList = () => {
    return autoImgArray.map((_, i) => (
      <div
        className="min-w-[100px] h-[100px] overflow-hidden flex items-center"
        key={i}
      >
        <img
          src={`/images/${type}/brand_logos/${i + 1}.png`}
          alt={i}
          className={styles.logo}
        />
      </div>
    ));
  };

  return (
    <section className="bg-slate-100 pt-5 m-10">
      <h1 className="text-3xl text-black font-semibold p-4 pb-0 mb-2 md:text-5xl md:px-8 md:pb-4 text-center">
        Suppliers we work with
      </h1>
      <div className={styles.marquee}>
        <div
          className={
            type == "autoparts" ? styles.autopartsTrack : styles.aircraftTrack
          }
        >
          <div
            className={`flex flex-nowrap gap-16 md:gap-26 items-center justify-evenly min-w-[${minw}vw]`}
          >
            {imageList()}
            {length < 10 ? imageList() : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
