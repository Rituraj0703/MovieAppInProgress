import React from 'react';
import './Header.css';
import Layer_1 from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import { Modal } from 'react-bootstrap';
import FormTab from '../../FormTab';
import Tab from 'react-bootstrap/Tab';



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            dialogClassName="modelstyle"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <div>
                    <FormTab />
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const Header = function () {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="header">
            <div class="col-lg-6">
                <img src={Layer_1}
                    className="Logo"
                    alt="logo"
                    align="left"
                />
            </div>



            <div class="col-lg-1">
                <Button variant="contained"
                    style={{ display: 'inline-block', justifyContent: 'right', float: 'right', tabSize: 'lg', align: 'right' }}
                    color="default" onClick={() => setModalShow(true)}
                >
                    LOGIN
            </Button>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}



export default Header;