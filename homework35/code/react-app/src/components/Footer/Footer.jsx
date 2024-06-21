import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Footer extends React.Component {

  render() {

    return (
      <footer className="bg-primary text-white mt-5 p-4 text-center border border-primary-subtle">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <ul className="list-group list-unstyled">
                    <li className="list-group-item-secondary">About us</li>
                    <li className="list-group-item-secondary">Our products</li>
                    <li className="list-group-item-secondary">Contacts</li>
                </ul>
              <p className="mb-0">© {new Date().getFullYear()} React App. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

