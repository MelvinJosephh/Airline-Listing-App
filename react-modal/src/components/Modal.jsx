import React from 'react'

const Modal = ({ displayModal, modalInfo, closeModal }) => {

    const {name, country, head_quaters, logo, slogan, website,established } = modalInfo;

    const displayInfo = () => {
        return (
            <div className="modal-info">
                <img className='airline-logo' src={logo}  alt='Airline Logo'/>
                <p><b>Airline:</b> {name}</p>
                <p><b>Country:</b> {country}</p>
                <p><b>HQ:</b> {head_quaters}</p>
                <p><b>Airline Slogan:</b> {slogan}</p>
                <p><b>Website:</b> {website}</p>
                <p><b>Established:</b> {established}</p>

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
