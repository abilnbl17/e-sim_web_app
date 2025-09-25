// import { data } from "../../../db";
import React from "react";

const Card = ({ data }) => {
  // console.log(item);
  return (
    <card className="text-red-500">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-xl transform hover:scale-105 transition duration-500">
          {/* <h3 className="mb-3 text-xl font-bold text-black">{data.name}</h3> */}
          {/* <div>{data.name}</div> */}
          {/* <div> */}

          {
            data.map((item) => {
              <img
                src={item.imageUrl}
                alt={item.name}
                className="rounded-3xl"
              />;
            })
            // <div className="relative"></div>

            // </div>
          }
        </div>
      </div>
    </card>
  );
};
export default Card;
