import React from 'react'
import {topDealUsers} from '../data.ts'

const Topbox = () => {
  return (
    <div>
      <h1 className='font-semibold text-2xl mb-5'>Top Deals</h1>
      <div>
        {topDealUsers.map((user) => (
            <div key={user.id} className='flex items-center justify-between mb-7'>
                <div className="flex gap-5">
                    <img src={user.img} alt="" className='w-[40px] h-[40px] object-cover  rounded-[50%]'/>
                    <div className='flex flex-col gap-[5px]'>
                        <span className='font-medium text-sm'>{user.username}</span>
                        <span className='text-xs'>{user.email}</span>
                    </div>
                </div>
                <span className='font-medium'>{user.amount}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Topbox
