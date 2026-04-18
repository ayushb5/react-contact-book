import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {
  const [contactData, setContactData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    return data || [];
  });
  return (
    <>
      <Navbar contactData={contactData} setContactData={setContactData} />
      <Card contactData={contactData} />
    </>
  )
}

export default App