'use client'
import React, { useState } from "react";
import Link from "next/link";
import { VscDiffAdded } from "react-icons/vsc";
import Modal from "./Modal";
const File = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <div className="flex w-32 items-center border justify-center gap-x-2">
      <Link href="/">FILE</Link>
      <button className=' mr-2' onClick={() => setShowModal(true)}><VscDiffAdded/></button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <form>
                <div className='flex flex-col'>
                    <label htmlFor="" className="text-black">ID</label>
                    <input type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className=" text-black">PASSWORD</label>
                    <input type="file" name="" id="" />
                    inp
                </div>
            </form>
        </Modal>
    </div>
  );
};

export default File;
