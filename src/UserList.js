import React, { Component } from 'react';
import {User} from './User';

export class UserList extends Component {
   
    render() {
      
        const users = this.props.users.map(u => <User author={u.Author} date={u.Date} title={u.Title} text={u.Text}/>)
       
        return (
            <div className="User-List">
                <p> Hey I'm a user list with {this.props.users.length}  </p>
               {users} 
            </div>

        )
    }

}
