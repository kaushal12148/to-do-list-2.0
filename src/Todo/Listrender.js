import React from 'react'

export default function Listrender(props) {
  return (
    <>
    {props.list.map((list)=>{
        return (
            <div>
                <div>
                    {list.title} ({list.date.toLocaleString()})
                </div>
            </div>
        )
    })}
    </>
  )
}