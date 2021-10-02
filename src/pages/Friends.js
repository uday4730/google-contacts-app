import React,{useState} from 'react'

import {Container, Row,Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Friends(){
    const [allContacts,setContacts] = useState([
        {Name: 'Uday Narayan Samanta', email:'udaynarayansamanta4730@gmail.com',Number:'+917970308900',company:'BIT mesra', isFam: false,isFr:true, isFav:false},
        {Name: 'Charchit Gupta', email:'charchitgupta@gmail.com',Number:'+918770501417',company:'BIT mesra', isFam: false,isFr:true, isFav:true},
        {Name: 'Ankit Kumar', email:'ankitkr@gmail.com',Number:'+919723750157',company:'BIT mesra', isFam: true,isFr:false, isFav:false},
        {Name: 'Saday Kumar Samanta', email:'sadaykumarsamanta@gmail.com',Number:'+917970308901',company:'BIT mesra', isFam: false,isFr:true, isFav:true},

    ])
  
    return(
        <> 
        <div className='content'>
        <div className='d-flex justify-content-between'>
        <span className='fs-2 m-3 fw-bold text-secondary'>Friends</span>
        
        </div>
        <Container >
            
            <Row>
                <Col className='p-0'>
                    <table className='table'>
                        <thead>
                            <tr className= 'td_contact_user'>
                                <th className='ps-3'>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Campus</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allContacts.map((contact, index)=>{
                                    return(
                                    <tr  className= 'td_contact_user'>
                                        <td className='p-2 ps-3 fs-5'>{contact.Name}</td>
                                        <td className='p-2 fs-5 '>{contact.email}</td>
                                        <td className='p-2 fs-5'>{contact.Number}</td>
                                        <td className='p-2 fs-5 '>{contact.company}</td>
                                        <td><i className='fas fa-bookmark text-muted me-3'></i><i className='fas fa-edit text-secondary me-2'></i><i className='fas fa-trash text_for_delete' ></i></td>
                                    </tr>
                                    )
                                })
                            }
                           
                           
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}

export default Friends;
