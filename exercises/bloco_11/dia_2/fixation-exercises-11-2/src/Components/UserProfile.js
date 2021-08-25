import React from "react";

class UserProfile extends React.Component {
  render() {
    const { id, name, email } = this.props.user;
    console.log(this.props.user);
    return (
      <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      </div>
    )
  }
}


export default UserProfile;