import React, { use, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useState,useContext } from 'react';
export const UseCalenderListRead = () => {

  const [calenderList, setCalenderList] = useState<any>({});

  // useEffect(() => {
  //   fetch(props.name)
  //   console.log(+"yobi")
  // },[])

  const fetch = async (user:any) => {
    let {data: list, error } = await supabase
      .from('reserve2')
      .select('title,start')
      .eq("name",user?.firstName)
      console.log("読み込み")
      console.log(list)
      if(error) {
        console.log(error)
      } else {
        setCalenderList(list);
        console.log(list)
      }
  }
  

  return {calenderList, fetch};
}
