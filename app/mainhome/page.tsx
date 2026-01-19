import React from 'react'

const page = () => {
  return (
      <div style={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div> <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 gap-6 p-4">
        <h1 className="text-4xl font-bold">Welcome Home! </h1>
        <p className="text-gray-700 text-lg">
          This is your dashboard after login.
        </p> </main></div> 
      </div>
  )
}

export default page