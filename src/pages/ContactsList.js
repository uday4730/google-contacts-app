import React, {useState} from "react";
import { Container,Row,Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


function ContactList(){
    const [allContacts,setContacts] = useState([
        {Name: 'Uday Narayan Samanta', email:'udaynarayansamanta4730@gmail.com',Number:'+917970308900',company:'BIT mesra', isFam: false,isFr:true, isFav:false},
        {Name: 'Charchit Gupta', email:'charchitgupta@gmail.com',Number:'+918770501417',company:'BIT mesra', isFam: false,isFr:true, isFav:true},
        {Name: 'Ankit Kumar', email:'ankitkr@gmail.com',Number:'+919723750157',company:'BIT mesra', isFam: true,isFr:false, isFav:false},
        {Name: 'Saday Kumar Samanta', email:'sadaykumarsamanta@gmail.com',Number:'+917970308901',company:'BIT mesra', isFam: false,isFr:true, isFav:true},

    ])
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const NameRef = React.useRef();
    const emailRef = React.useRef();
    const phoneNumberRef = React.useRef();
    const companyRef = React.useRef();
    const isFamRef = React.useRef();
    const isFrRef = React.useRef();
    const isFavRef = React.useRef();
    
    const SaveContact = () =>{
        let contactsArr = [];
        allContacts.map((contact)=>{
            contactsArr.push(contact);
        })
        let contact = {
            Name: NameRef.current.value,
            email: emailRef.current.value,
            Number: phoneNumberRef.current.value,
            company: companyRef.current.value,
            isFam: isFamRef.current.checked,
            isFr: isFrRef.current.checked,
            isFav: isFavRef.current.checked,
        };
        contactsArr.push(contact);
        setContacts(contactsArr);
        toggle();
    }

    return(
        <> 
        <div className='content'>
        <div className='d-flex justify-content-between'>
        <span className='fs-2 m-3 fw-bold text-secondary'>All Contacts</span>
        <button className='btn-lg h-50 add_button  btn me-3 shadow ' onClick={toggle}><i className='fas fa-plus'></i> Create contact</button>
        </div>
        <Container >
            <div>
            
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add New Contact</ModalHeader>
                <ModalBody>
                    <>
                        <Container fluid>
                            <Row>
                                <Col sm='12'>
                                    <div>
                                        <label htmlFor='Name'></label><br/>
                                        <input id='Name' ref={ NameRef} type='text' className='p-1 fs-5 w-100 inp_add_contact' placeholder='Enter Name'></input>
                                    </div>
                                </Col>
                                <Col sm='12'>
                                    <div>
                                        <label htmlFor='email'></label><br/>
                                        <input id='email' ref={ emailRef} type='email' className='p-1 fs-5 w-100 inp_add_contact' placeholder='Enter email'></input>
                                    </div>
                                </Col>
                                <Col sm='6'>
                                    <div>
                                        <label htmlFor='Number'></label><br/>
                                        <input id='Number' ref={ phoneNumberRef} type='text' className='p-1 fs-5 w-100 inp_add_contact' placeholder='Enter Number'></input>
                                    </div>
                                </Col>
                                <Col sm='6'>
                                    <div>
                                        <label htmlFor='company'></label><br/>
                                        <input id='company' ref={ companyRef} type='text' className='p-1 fs-5 w-100 inp_add_contact' placeholder='Enter Campus'></input>
                                    </div>
                                </Col>
                                <Col sm='12' className='d-flex justify-content-around mt-4'>
                                    <div>
                                        <input id='isFam' ref={ isFamRef} type='checkbox'></input>
                                        <span className='ms-2'>Family</span> 
                                    </div>
                                    <div>
                                        <input id='isFr' ref={ isFrRef} type='checkbox'></input>
                                        <span className='ms-2'>Friend</span>
                                    </div>
                                    <div>
                                        <input id='isFav' ref={ isFavRef} type='checkbox'></input>
                                        <span className='ms-2'>Favourite</span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={SaveContact}>Save</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
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
        </Container>
        </div>
       </>
    )
}

export default ContactList;