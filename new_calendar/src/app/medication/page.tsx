import React from "react";
import Accordion from "../components/Accordion";

const page = () => {
  return (
    <div className="w-full bg-green-800 ">
      <form className="flex gap-4 items-center justify-center text-center ">
        <div className="flex flex-col">
          <label htmlFor="medicineName" className="text-white">病名</label>
          <input type="text" id="medicineName" className="border "/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="diseaseName" className="text-white">薬名</label>
          <input type="text" id="diseaseName" className="border"/>
        </div>
        <div className="flex justify-center items-center text-center mt-5">
        <button className="bg-sky-200 w-32 rounded-full shadow-md h-8 border ">登録</button>
        </div>
      </form>
      <div className="w-full h-screen ">
        <div className='p-4'>
            <Accordion title='タイトル' explanation='説明'/>
        </div>
      </div>
    </div>
  );
};

export default page;
