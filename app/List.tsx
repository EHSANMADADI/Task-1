'use client'
import React from 'react'
import { useState } from 'react'
interface Props {
     title: string,
     text: string,
     hoverText: string
}
function List(props: Props) {
     const [text, setText] = useState(false)
     return (<>
          <li>{props.title}</li>
          <li onMouseLeave={() => { setText(false) }}
               onMouseEnter={() => { setText(true) }}
               className='text-color cursor-pointer mb-4'>
               {!text ? props.text : props.hoverText}</li>
     </>
     )
}

export default List