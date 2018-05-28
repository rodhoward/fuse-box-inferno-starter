import { Component } from 'inferno';
import Button from 'inferno-bootstrap/dist/Button';
import Modal from 'inferno-bootstrap/dist/Modal/Modal';
import ModalBody from 'inferno-bootstrap/dist/Modal/ModalBody';
import ModalFooter from 'inferno-bootstrap/dist/Modal/ModalFooter';
import ModalHeader from 'inferno-bootstrap/dist/Modal/ModalHeader';


export class ModalExample extends Component {
    state = {
        modal: false
    };
    constructor(public props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const fadeModal = (this.props.hasOwnProperty('fade') ? this.props.fade : true)
        return (
            <Button outline color="primary" size="sm" onClick={this.toggle}><i class="fa fa-angle-left mr-1"></i>{this.props.buttonLabel}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Button>
        );
    }
}