import React, { useEffect, useState } from 'react';
import SmurfDisplay from './smurfDisplay'
import NewSmurf from './NewSmurf'

export default function App() {
  return (
    <>
      <h1>SMURF VILLAGE :D</h1>
      <NewSmurf />
      <SmurfDisplay />

    </>
  )
}