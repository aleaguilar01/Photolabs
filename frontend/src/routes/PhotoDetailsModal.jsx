import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ handleDisplayModal, singlePhotoDetail, handleOnClickFav, listOfFavPhotos }) => {
  const similar_photos = Object.values(singlePhotoDetail.similar_photos);
  console.log(similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={()=> (handleDisplayModal())}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div >
        <PhotoListItem isModal photo={singlePhotoDetail} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos}/>
      </div>
      
      <div className='photo-details-modal__images'><p className='photo-details-modal__top-bar'>Similar Images</p>
      <PhotoList photos={similar_photos} handleOnClickFav={handleOnClickFav} listOfFavPhotos={listOfFavPhotos} handleDisplayModal={handleDisplayModal}/>
      </div>
    
    </div>
  )
};

export default PhotoDetailsModal;
