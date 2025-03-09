import React from "react";
import './App.css';
import Dashboard from "./component/DashboardPortfolio/Dashboard";
import ImdbDashboard from "./Movies/ImdbDashboard";
import Table from "./Table/Table";
import Actor from "./component/Actor/Actor";
import CoinDashboard from "./Coins/CoinDashboard";





function App() {
  return (
    <div className="App">
     
     <Dashboard />
     <ImdbDashboard />
     <Table />
     <Actor />
     <CoinDashboard />
     
     
    
    
    


     


    </div>
  );
}

export default App;