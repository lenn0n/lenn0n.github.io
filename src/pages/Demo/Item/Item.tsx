import React from 'react'

type Props = {
  preview?: string,
  title?: string,
  date?: string
}

function Item({ preview, title, date }: Props) {
  return (
    <div className='' role='button'>
      <img
        src={preview}
        className='rounded-[15px] rounded-bl-[30px] border-[5px] border-cyan-500 object-cover'
        alt="" style={{ width: '300px', height: '200px' }}
      />
      <div className="text-[25px] font-bold">{title}</div>
      <div className="text-[14px]">{date}</div>
    </div>
  )
}

export default Item