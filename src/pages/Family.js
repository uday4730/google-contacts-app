import React from 'react';
import { Row,Col } from "reactstrap";


const Family = ({ contacts }) => {
    const [allContacts,setContacts] = React.useState(contacts);

    return (
        <>
            
        <div className='content'>
            <div className='d-flex justify-content-between'>
            <span className='fs-2 m-3 fw-bold text-secondary'>Family</span>
            </div>    
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
        
            </div>
        </>
    )
}

export default Family;
