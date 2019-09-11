import React from 'react';
import User from './User'

class Users extends React.Component{

users = () => {
    return this.props.users.map(user =>
     <User
       key={user.id}
       user={user}
       chatWithThisUser={this.props.chatWithThisUser}
       chatid={this.props.chatid}
     />
   )
}

render(){
    return (
      <div>
        <p>Logged in as: {localStorage.name}</p>
        {this.users()}
      </div>
    )
  }


}

export default Users;
