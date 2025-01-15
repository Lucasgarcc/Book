import React from 'react'
import './Modal.css'
import ChangeBook from '../ChangeBook/ChangeBook'

function Modal({ setModal, className, categories, registerBook, registerCategory }) {

  return (
    <div className={`modal ${className}`} >
      <div className="modal-content">
        <button className="modal-close" onClick={() => setModal(false)}>
          <span className="x-icon"></span>
        </button>
        <div className="modal-content-info">
          <ChangeBook
            categories={categories} 
            registerBook={registerBook}
            registerCategory={registerCategory}
          /> 
        </div>
      </div>
    </div>
  )
}

export default Modal