'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Modal from '../components/Modal'
const Page = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showModal1, setShowModal1] = useState<boolean>(false)

  return (
    <>
        <h1 className=' text-5xl'>home</h1>

        <button className=' bg-blue-400 mr-2' onClick={() => setShowModal(true)}  >Text Modal</button>
        <button className=' bg-blue-400 mr-2'>video Modal</button>
        <button className=' bg-blue-400 mr-2' onClick={() => setShowModal1(true)}>Form Modal</button>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-5'>Modal Title</h3>
            </div>
        </Modal>
        <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
            <form>
                <div className='flex flex-col'>
                    <label htmlFor="">ID</label>
                    <input type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">PASSWORD</label>
                    <input type="password" name="" id="" />
                </div>
            </form>
        </Modal>

    </>
  )
}

export default Page