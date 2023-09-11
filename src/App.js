import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
   const [modal, setModal] = useState(false);
   const [modalInfo, setModalInfo] = useState(null);
   const [airlines, setAirlines] = useState([])

   const openModal = (info) => {
      setModalInfo(info)
      setModal(!modal)
   }

   useEffect(() => {
      fetchAirlineData();
   }, [])

   const fetchAirlineData = () => {
      fetch('./data.json'
         , {
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            }
         })
         .then(response => {
            return response.json()
         })
         .then(data => {
            setAirlines(data?.airlines)
         })
         .catch((error) => {
            console.log(error);
         })
   }
   return (
      <div className="App">
         <div className="list_header">A list of International Airlines</div>
         <table>
            <thead>
               <tr>
                  <th> Name</th>
                  <th> Country</th>
                  <th> Head Quaters</th>
               </tr>
            </thead>
            <tbody>
               {
                  airlines.map(item => {
                     return (
                        <tr key={item?.id} onClick={()=>openModal(item)}>
                           <td><li>{item?.name}</li></td>
                           <td>{item?.country}</td>
                           <td>{item?.head_quaters}</td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </table>


         <Modal
            displayModal={modal}
            modalInfo={modalInfo}
            closeModal={openModal}
         />
      </div>
   );
}

export default App;
