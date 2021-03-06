import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class TosModal extends Component {
  constructor(){
    super();
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <span>

      <a
      bsStyle="primary"
      bsSize="large"
      onClick={this.open}
      >
      Terms of Service
      </a>

      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Terms of Service</h4>
          <p>Last updated: May 11, 2016</p>
          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the citybook.io or codeforamerica.github.io/citybook websites (the "Service") operated by CityBook, a project of Code for America Labs ("us", "we", or "our").</p>
          <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
          <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
          <p><strong>Use of Data</strong></p>
          <p>Any data made public via a Google Spreadsheet for usage by CityBook shall be considered public domain. CityBook has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any users and others who access or use the Service.</p>
          <p>By using the Service, you give consent for CityBook and Code for America to use any data that you input into the Service. CityBook and Code for America reserve the right to analyze your data and may use your data for commercial purposes. CityBook and Code for America reserve the right to provide attribution at our discretion</p>
          <p><strong>Termination</strong></p>
          <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
          <p><strong>Governing Law</strong></p>
          <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
          <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
          <p><strong>Changes</strong></p>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
          <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
          <p><strong>Contact Us</strong></p>
          <p>If you have any questions about these Terms, please contact us by opening a Github Issue at https://github.com/codeforamerica/citybook.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
      </span>
    );
  }

}
