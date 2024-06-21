import React from "react"
import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"

const HomeRoute = () =>{ 
  return(
    <div className="ome-route">
      <TopNavigation />
      <PhotoList />
    </div>
  )
};

export default HomeRoute;