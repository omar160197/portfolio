import { Component } from "react";

export default class NavButton extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <button
        className={this.props.Bclass}
        type={this.props.Btype}
        data-bs-toggle={this.props.Btoggle}
        data-bs-target={this.props.Btarget}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    );
  }
}
