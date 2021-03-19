import React from 'react';
import { connect } from 'react-redux';
import { getEmployees, editEmployees, deleteEmployees } from '../../redux/actions/employees';
import EditEmployee from "../EditEmployee/Editemployee"

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateShowModal: false,
      reqEmp: {}
    };
  }
  componentDidMount() {
    this.props.getEmployees()
    console.log(11111111222)
  }

  handleUpdate = (emp) => {
    this.setState({
      updateShowModal: true,
      reqEmp: emp
    })
  }

  handleDelete = (emp) => {
    const req = {
      "_id": emp._id
    }
    this.props.deleteEmployee(req);
  }

  handleCloseUpdateModal = () => {
    this.setState({
      updateShowModal: false
    }, () => {
      this.props.getEmployees()
    })
  }
  handleAdd = () => {
    this.props.history.push("/new-employee")
  }

  render() {
    const { empList } = this.props;
    const employeesWrap = empList && empList.length ? empList.map((item) => {
      return (
        <tr>
          <td>{`${item.name}`}</td>
          <td>{item.jobTitle}</td>
          <td>{item.department}</td>
          <td>{item.location}</td>
          <td>{item.age}</td>
          <td>{item.salary}</td>
          <td>
            <button className="" onClick={() => this.handleUpdate(item)}>Update</button>
            <button className="" onClick={() => this.handleDelete(item)}>Delete</button>
          </td>
        </tr>
      )
    }) : ""
    return (
      <div>
        <div>
          <button onClick={() => this.handleAdd()}>ADD</button>
        </div>
        <table className="leads_table">
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Location</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
          {employeesWrap && employeesWrap}
        </table>

        {this.state.updateShowModal && <EditEmployee showModal={this.state.updateShowModal} closeModal={this.handleCloseUpdateModal} empData={this.state.reqEmp} editEmpData={this.props.editEmployee} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    empList: state.employeesData && state.employeesData.employees ? state.employeesData.employees : []
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => dispatch(getEmployees()),
    editEmployee: (payload) => dispatch(editEmployees(payload)),
    deleteEmployee: (payload) => dispatch(deleteEmployees(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);