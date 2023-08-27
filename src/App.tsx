import React, { useState } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import TrackPage from './layout/pages/TrackPage';
import OverviewPage from './layout/pages/OverviewPage';

function App() {
  const [tabState, setTabState] = useState("Track");

  const renderPage = () => {
      if (tabState === "Track") {
        return (
          <TrackPage/>
        )
      }
      if (tabState === "Overview") {
        return (
          <OverviewPage/>
        )
      }
  }

  return (
    <main>
      <Navbar tabState={tabState} setTabState={setTabState}/>
      {renderPage()}
    </main>
  );
}

export default App;
