import React,{useState} from 'react';
import Modal from 'react-modal';
import './table.css';



function Table () {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpeen, setModalIsOpeen]= useState(false);

 
        return ( 
            <div>
                <table>             
                        <tr className="head">
                            <th>USER</th>
                            <th>ACCOUNT TYPE</th>
                            <th>STATUS</th>
                            <th>COORDINATOR</th>
                        </tr>

                        <tr className="dataa">
                            <td id="topp" className="personal-detial">
                                <img src="./images/p-1.jpeg" />
                                <div>
                                    <h3>Debra Warren(you)</h3>
                                    <p>email@gmail.com</p>
                                </div>
                            </td>
                            <td className="gray-clr">Owner</td>
                            <td className="gray-clr">Active</td>
                            <td>
                                <span className="project">3 projects</span>
                            </td>
                            <td className="btn">
                                <button onClick={()=> setModalIsOpen(true)}>
                                   <i class="fa fa-ellipsis-h"></i>
                                </button>
                                <Modal className="modal-1" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                                   <section className="modal-one-section">
                                       <p><a href="#">Change account type</a></p>
                                       <p><a href="#" className="red">Deactive account</a></p>
                                   </section>
                               </Modal>
                               
                            {/*--first-modal--*/}
                            </td>
                        </tr>

                        <tr className="data">
                            <td className="personal-detial">
                            <img src="./images/p-1.jpeg" />
                                <div>
                                    <h3>Morries Warren</h3>
                                    <p>email@gmail.com</p>
                                </div>
                            </td>
                            <td className="gray-clr">Owner</td>
                            <td className="gray-clr">Active</td>
                            <td>
                                <span className="project">1 project</span>
                            </td>
                            <td className="btn">
                               <button onClick={()=> setModalIsOpeen(true)}>
                                   <i class="fa fa-ellipsis-h"></i>
                                </button>
                                <Modal className="modal-2" isOpen={modalIsOpeen} onRequestClose={()=> setModalIsOpeen(false)}>
                                   <section className="modal-one-section">
                                       <p><a href="#">Change account type</a></p>
                                       <p><a href="#" className="red">Deactive account</a></p>
                                   </section>
                               </Modal>
                               {/*--seconed-moda--*/}
                            </td>
                        </tr>


                </table>
            </div>
         );
    }
 
export default Table;