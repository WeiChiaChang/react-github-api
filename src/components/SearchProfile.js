import React from "react";
import ReactDOM from "react-dom";

class SearchProfile extends React.Component {
  render() {
    return (
      <div className="search--box">
         <form onSubmit={this.handleForm.bind(this)}>
           <label><input type="search" ref="username" placeholder="Type Username + Enter"/></label>
         </form>
      </div>
    )
  }
  
  handleForm(e) {
    e.preventDefault();
    let usernames = this.refs.username.value;
    this.props.fetchProfile(usernames);
  }
}

export default SearchProfile;