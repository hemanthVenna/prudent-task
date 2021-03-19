import React from 'react';
import { connect } from 'react-redux';
import { addEmployees } from '../../redux/actions/employees';

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      jobTitle: "",
      department: "",
      location: "",
      age: "",
      salary: "",
      id: "",
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })
  }
  handleUpdate = () => {
    const req = {
        name: this.state.name,
        jobTitle: this.state.jobTitle,
        department: this.state.department,
        location: this.state.location,
        age: this.state.age,
        salary: this.state.salary
    }

    this.props.addEmployee(req)
}
  render() {
    return (<div>
      <div className="paddingAll">
        <div className="alignCenter">
          <div className="flex">

            <div>
              <p>Employee Name</p>
              <input type="text" name="name" placeholder='Name' className="inputStyle" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
              <p>Job Title</p>
              <input type="text" name="jobTitle" placeholder='jobTitle' className="inputStyle" value={this.state.jobTitle} onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="flex">

            <div>
              <p>Department</p>
              <input type="text" name="department" placeholder='department' className="inputStyle" value={this.state.department} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
              <p>Location</p>
              <input type="text" name="location" placeholder='location' className="inputStyle" value={this.state.location} onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div className="flex">

            <div>
              <p>Age</p>
              <input type="text" name="age" placeholder='age' className="inputStyle" value={this.state.age} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
              <p>Salary</p>
              <input type="text" name="salary" placeholder='salary' className="inputStyle" value={this.state.salary} onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
        </div>
        <div>
          <button onClick={this.handleClose}>Close</button>
          <button onClick={this.handleUpdate}>Save</button>
        </div>
      </div>
    </div>)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: (payload) => dispatch(addEmployees(payload))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddEmployee);