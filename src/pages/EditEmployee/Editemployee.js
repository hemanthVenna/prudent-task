import React from 'react';
import Modal from 'react-modal';

class UpdateDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.empData && props.empData.name ? props.empData.name : "",
            jobTitle: props.empData && props.empData.jobTitle ? props.empData.jobTitle : "",
            department: props.empData && props.empData.department ? props.empData.department : "",
            location: props.empData && props.empData.location ? props.empData.location : "",
            age: props.empData && props.empData.age ? props.empData.age : "",
            salary: props.empData && props.empData.salary ? props.empData.salary : "",
            id: props.empData && props.empData._id ? props.empData._id : "",
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
            salary: this.state.salary,
            _id: this.state.id
        }

        this.props.editEmpData(req)
    }
    handleClose = () => {
        this.props.closeModal()
    }
    render() {
        return (
            <div className="App">
                <Modal class="Modal"
                    isOpen={true}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay">
                    <div>
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
                    </div>
                </Modal>
            </div>
        );
    }
}

export default UpdateDevice;
