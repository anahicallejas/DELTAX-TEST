import React from 'react'
import Item from '../Component/Item'
import { connect } from "react-redux"
import data from '../data'

export default function List(props) {
  return (
    <div className='list'>
        <center><h4>LIST</h4></center>
        {
        data.map((x) => <Item data={x}/>)
        }
        <a className='btn btn-dark btn-block' href='/new'>NEW</a>
    </div>
  )
}
