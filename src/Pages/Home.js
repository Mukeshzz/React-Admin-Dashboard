import React from "react";
import Topbox from "../components/Topbox";
import Chartbox from "../components/Chartbox";
import BarChartBox from "../components/BarChartBox.js";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../data.ts";
import PieCharbox from "../components/PieCharbox.js";
import BigChartbox from "../components/BigChartbox.js";

export default function Home() {
  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] grid-flow-row-dense max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:auto-rows-[minmax(120px,auto)]">
      <div className="p-[20px] rounded-[10px] border border-solid border-[#3A6D8C] row-span-3">
        <Topbox />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C]">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C]">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C] row-span-3">
        <PieCharbox />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C]">
        <Chartbox {...chartBoxConversion} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C]">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C] col-span-2 row-span-2 max-sm:hidden">
        <BigChartbox />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C]">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid border-[#3A6D8C]">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}
