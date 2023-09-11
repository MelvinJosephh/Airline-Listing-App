import React from 'react'

const Modal = ({ displayModal, modalInfo, closeModal }) => {

    // const {name, country, head_quaters, logo, slogan, website,established } = modalInfo;

    const displayInfo = () => {
        return (
            <div className="modal-info">
                <img className='airline-logo' src={modalInfo?.logo}  alt='Airline Logo'/>
                <p><b>Airline:</b> {modalInfo?.name}</p>
                <p><b>Country:</b> {modalInfo?.country}</p>
                <p><b>HQ:</b> {modalInfo?.head_quaters}</p>
                <p><b>Airline Slogan:</b> {modalInfo?.slogan}</p>
                <p><b>Website:</b> {modalInfo?.website}</p>
                <p><b>Established:</b> {modalInfo?.established}</p>

            </div>
        )
    }

    const closeModalFun = (e) => {
        e.stopPropagation()
        closeModal()
    }

    let modal = (
        <div
            className="modal"
            onClick={closeModalFun}>

            <div className="modal-content"
                onClick={e => e.stopPropagation()}>

                <span
                    className="close"
                    onClick={closeModal}>&times;
                </span>

                <div className="modal-flex">
                    {displayInfo()}
                </div>
                <span><button className="modal-button" onClick={closeModal}>Close
                </button></span>

            </div>

        </div>
    )

    return (displayModal ? modal : null);
}

export default Modal
