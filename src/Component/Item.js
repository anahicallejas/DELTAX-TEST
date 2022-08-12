import React from 'react'

export default function Item({data}) {
  return (
    <div className='shadow p-3 mb-2 bg-body rounded item'>
        <img src={data.image} className='img-thumbnail image2'></img>
        <label className='name'>{data.name}</label>
    </div>
  )
}
