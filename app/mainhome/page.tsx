"use client"
import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const page = () => {

  const top100Films = [
      { label: 'The Shawshank Redemption', year: 1994 },
      { label: 'The Godfather', year: 1972 },
      { label: 'The Godfather: Part II', year: 1974 },
      { label: 'The Dark Knight', year: 2008 },
      { label: '12 Angry Men', year: 1957 },
      { label: "Schindler's List", year: 1993 },
      { label: 'Pulp Fiction', year: 1994 },
      { label: 'The Sawshank Redemption', year: 1994 },
      { label: 'The Gdfather', year: 1972 },
      { label: 'The Gdfather: Part II', year: 1974 },
      { label: 'The Drk Knight', year: 2008 },
      { label: '12 Angry Mn', year: 1957 },
      { label: "Schinder's List", year: 1993 },
      { label: 'Pulp Fction', year: 1994 },
      { label: 'Th Shawshank Redemption', year: 1994 },
      { label: 'Th Godfather', year: 1972 },
      { label: 'Th Godfather: Part II', year: 1974 },
      { label: 'Th Dark Knight', year: 2008 },
      { label: '1 Angry Men', year: 1957 },
      { label: "chindler's List", year: 1993 },
      { label: 'ulp Fiction', year: 1994 },
  
    ]
  return (
    <div>
    <div style={{ margin: 20, justifySelf: 'center', justifyContent: 'center', width: 1000 }}>
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" style={{ width: 1000 }} />}
        />
      </div>
      <div style={{ height: '87vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div> <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 gap-6 p-4">
        <h1 className="text-4xl font-bold">Welcome Home! </h1>
        <p className="text-gray-700 text-lg">
          This is your dashboard after login.
        </p> </main></div> 
      </div>
      </div>
  )
}

export default page