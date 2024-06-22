import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ handleDisplayModal, photoId, largePhoto, similar_photos }) => {
  console.log(photoId, largePhoto, similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={()=> (handleDisplayModal())}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
