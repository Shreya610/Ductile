"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { IMelavaCard } from '../../../utils/interface/Melava/IMelavaCard'
import { imageKitLoader } from '../../../utils/ImageKitLoader'



interface Iprops {

    card: IMelavaCard
}
const MelavaCard: React.FC<Iprops> = (props) => {


    const { card } = props

    return (


        <div className='w-[90%] mx-auto relative'>
            <Image loader={imageKitLoader} src={card?.img} height={300} width={500} alt='melava' className={`${card?.left ? "" : "ml-auto"} h-[200px] md:h-[350px]  object-cover  max-h-[400px]`} />
            <div className={` md:absolute flex flex-col justify-center   md:min-h-[300px] top-[7%] bottom-auto  ${card.left ? "left-[35%]" : ""} w-full md:w-[66%]  p-4 md:p-8 bg-[#f1e9d8] space-y-3 `}>
                <h1 className='text-mob-subHeading  font-plus-jakarta-sans font-medium leading-heading w-full md:w-[70%]'>
                    {card?.heading}
                </h1>
                <p className='leading-link-text font-plus-jakarta-sans text-sm' >
                    {card?.bodyText}
                </p>
            </div>
        </div>

    )
}

export default MelavaCard