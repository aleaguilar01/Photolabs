import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photoList = new Array(3).fill(sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photoList.map( (item, key) => <PhotoListItem {...item} key={key}/>)}
    </div>
  );
};

export default App;
