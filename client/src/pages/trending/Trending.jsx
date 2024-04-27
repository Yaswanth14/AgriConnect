import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

function Trending() {
  const [item, setitem] = useState("Potato");
  const [state, setstate] = useState("Karnataka");
  const [city, setcity] = useState("Bangalore");

  return (
    <Layout>
      <div className="p-5">
        <div className="bg-[#7ED957] rounded-md">
          <div className="text-2xl font-extrabold">Trending Crops</div>
          <input
            type="text"
            placeholder="Commodity"
            value={item}
            onChange={(e) => setitem(e.target.value)}
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setstate(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
          <button className="bg-[#00BF63] text-white font-semibold px-3 py-2 rounded-md">
            Fetch Prices
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Trending;
