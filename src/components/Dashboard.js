import {Container,Row,Col, ListGroup, ListGroupItem} from 'reactstrap';
import phone from '../media/phone.png';
import profile from '../media/profile.png';
import ContactList from '../pages/ContactsList';
import {NavLink} from 'react-router-dom';

function Dash()
{
    return(
        <>
        <Container fluid className='m-0'>
            <Row className='miniShadow position-relative bg-white' style={{zIndex: '2'}}>
                <Col className='p-2 border-0 text-center' sm='2' md='1'>
                    <img src= {phone} className='w-50' alt='phone_img'/>
                </Col>
                <Col className='p-2 border-0 text-center' sm='2' md='1'>
                    <i className='fs-1 fw-bold ' lg='4'>Contacts</i>
                </Col>
                <Col className='d-flex align-items-center' sm='6' md={{ size: 5, offset: 2}}>
                    <input type='search' placeholder='Search' className='border-0 rounded p-3 w-100 bgLight' />
                </Col>
                <Col className='p-2 border-0 text-center' sm='2' md={{ size: 1, offset: 2}}>
                    <img src= {profile} className='w-50' alt='profile_img'/>
                </Col>
            </Row>
            <div className='sidebar miniShadow'>
                <ListGroup>
                    <NavLink className="nav_link_r" to='/'>
                        <ListGroupItem className='p-3 list-gitem'><i className='fa fa-user me-3 fs-4'/>All Contacts</ListGroupItem>
                    </NavLink>
                    <NavLink className="nav_link_r" to='/family'>
                        <ListGroupItem className='p-3 list-gitem'><i className='fa fa-house-user me-3 fs-4'/>My Family</ListGroupItem>
                    </NavLink>
                    <NavLink className="nav_link_r" to='/friends'>
                        <ListGroupItem className='p-3 list-gitem'><i className='fa fa-user-friends me-3 fs-4'/>My Friends</ListGroupItem>
                    </NavLink>
                    <NavLink className="nav_link_r" to='/favourites'>
                        <ListGroupItem className='p-3 list-gitem'><i className='fa fa-bookmark me-3 fs-4'/>My Favourite</ListGroupItem>
                    </NavLink>
                </ListGroup>
            
            </div>
           <ContactList/>
        </Container>
        </>
    )
}

export default Dash;