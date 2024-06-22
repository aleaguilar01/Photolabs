import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ handleDisplayModal, singlePhotoDetail }) => {
  console.log(singlePhotoDetail)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={()=> (handleDisplayModal())}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
