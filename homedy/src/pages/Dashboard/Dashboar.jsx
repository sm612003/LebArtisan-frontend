import React from 'react'
import Topbar from "../../global/Topbar";
import Sidebar from "../../global/Sidebar";
import { useState } from 'react';
const Dashboard = () => {
    
    const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
      <Topbar setIsSidebar={setIsSidebar} />

    </main>
  </div>
  )
}

export default Dashboard
