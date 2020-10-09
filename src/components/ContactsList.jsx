import React, { Component } from 'react';
import { getContacts } from '../apiServices';
import Header from './Header';

class ContactsList extends Component {
  state = {
    contacts: [],
  }

  componentDidMount = () => {
    const {
      match: { params: { zipCode, distance } }
    } = this.props

    getContacts(zipCode, distance).then((res) => {
      if (res && res.success) {
        this.setState({ contacts: res.data.contacts })
      }
    })
  }

  render() {
    const { state: { contacts } } = this

    return (
      <>
        <Header/>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 text-center">
            <h1 className="mt-4 mb-2">Matched Contacts</h1>

            <table className="table p-5">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Zip Code</th>
                </tr>
              </thead>
              <tbody>
                {contacts && contacts.map((item, i) => (
                  <tr key={`item-${i}`}>
                    <td scope="row">{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.zipCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-2"></div>
        </div>

      </>
    )
  }
}

export default ContactsList;