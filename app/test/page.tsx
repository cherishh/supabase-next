'use client'
import React, { useEffect, useState } from 'react'

export default function Test() {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  }

  return (
    <div>
      <label htmlFor="single">label</label>
      <input
          // style={{
          //   visibility: 'hidden',
          //   position: 'absolute',
          // }}
          type="file"
          id="single"
          accept="image/*"
          onChange={handleChange}
        />
    </div>
  )
}