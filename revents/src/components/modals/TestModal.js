import React from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modalActions';

const mapDispatchToProps = {
  closeModal
}

const TestModal = ({closeModal}) => (
  <Modal closeIcon='close' open={true} onClose={closeModal}>
    <Modal.Header>Test Modal</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>Test modal</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default connect(null, mapDispatchToProps)(TestModal);
