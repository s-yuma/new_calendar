"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { supabase } from "../utils/supabaseClient";
import { useState, useRef, useEffect } from "react";
import { UseCalenderListRead } from "../components/UseCalenderListRead";

const Calendar = ({user}:{user:any}) => {
  const { calenderList, fetch } = UseCalenderListRead();
  const [ymd, setYmd] = useState("");
  const [beginningTime, setBeginningTime] = useState("");
  const inp = useRef<HTMLInputElement | undefined>();
  const [title, setTitle] = useState<string>("");

  const pushReserve = async (e: any) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("reserve2").insert([
        {
          name: user?.firstName,
          title: `${user?.firstName}の予定` + title,
          start: `${ymd}T${beginningTime}:00`,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
    fetch(user);
    setYmd("");
    setBeginningTime("");
    setTitle("");
    // setUpdata(updata?false:true)
  };

  useEffect(() => {
    fetch(user)
  },[])

  return (
    <div
      className=" bg-gradient-to-br rounded-lg w-full
    from-green-900 via-teal-800 to-green-900  shadow shadow-emerald-400  p-3"　 
    >
      <form
        onSubmit={pushReserve}
        id="yoyaku"
        method="post"
        className="sm:flex sm:pt-0 pt-2"
      >
        <div className="sm:w-50">
          <input
            type="text"
            className="sm:ml-0 sm:w-96 w-80 ml-7 h-10 rounded mr-1 mt-1"
            placeholder="予定"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="sm:ml-0 flex ml-7 mt-1">
          <input
            type="date"
            onChange={(event) => setYmd(event.target.value)}
            value={ymd}
            className="h-10 rounded mr-1"
          />
          <select
            className="h-10 rounded mb-2 w-24 mr-1"
            value={beginningTime}
            onChange={(event) => setBeginningTime(event.target.value)}
          >
            <option value="">時間</option>
            <option value="08:00">8:00</option>
            <option value="08:30">8:30</option>
            <option value="09:00">9:00</option>
            <option value="09:30">9:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="12:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:00">19:00</option>
          </select>
          <button className="bg-white h-10" type="submit" onClick={pushReserve}>
            登録
          </button>
        </div>
      </form>
      <div className="w-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ja" // 日本語化
        events={calenderList}
        height={680}
      />
      </div>
    </div>
  );
};
export default Calendar;
