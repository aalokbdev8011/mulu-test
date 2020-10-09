import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUserProfile } from '../apiServices'
import Header from './Header';

class UserPage extends Component {
  state = {
    userProfile: {},
    distance: 50,
  }

  componentDidMount = () => {
    const {
      match: { params: { userId } }
    } = this.props
    getUserProfile(userId).then((res) => {
      if (res && res.success) {
        this.setState({ userProfile: res.data.contactProfile })
      }
    })
  }

  render() {
    const { userProfile, distance } = this.state
    return (
      <>
        <Header />
        <div className="row">
          <div className="col-3">
          </div>
          <div className="col-6 text-center mt-5">
            <h1>User Details</h1>
            {userProfile &&

              <table className="table p-5 text-center">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>{userProfile.firstName}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{userProfile.lastName}</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>{userProfile.age}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{userProfile.gender}</td>
                  </tr>
                  <tr>
                    <td>Zip Code</td>
                    <td>{userProfile.zipCode}</td>
                  </tr>
                  {userProfile.profession &&
                    <tr>
                      <td>Profession</td>
                      <td>{userProfile.profession}</td>
                    </tr>
                  }
                </tbody>
              </table>}
            <div className="row">
              <div className="col text-center">
                <Link to={`/contacts_list/${userProfile && userProfile.zipCode}/${distance}`}>
                  <div className="btn btn-primary">Get Matched Contacts</div>
                </Link>
                {/* <Link to={`/agents_list/${userProfile && userProfile.zipCode}`}>
                  <div className="ml-4 btn btn-primary">Show Agents</div>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-3">

          </div>
        </div>

      </>
    );
  }
}

export default UserPage;