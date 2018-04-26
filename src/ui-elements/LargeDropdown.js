import React, {Component} from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
class LargeDropdown extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render() {
    return (
      <div>
        <Dropdown
          size={this.props.size}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          className={`dropdown-${this.props.size}`}>
          <DropdownToggle
            caret
            className={this.props.buttonType}
            color={this.props.color}>
            {this.props.title}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Other Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
export default LargeDropdown
