import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleInput = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]: val
        })
    }
    render() {
        return (
            <div >
                <div className='flexWrap'>

                    <div className="loginWrap"></div>
                    <div className="loginWrap">
                        <div>
                            <input type="text" name="userName" className="inputStyle" value={this.state.userName} onChange={(e) => this.handleInput(e)} />
                        </div>
                        <div>
                            <input type="text" name="userName" className="inputStyle" value={this.state.userName} onChange={(e) => this.handleInput(e)} />
                        </div>
                        <div className='flexWrap'>
                            <button>REGISTER</button>
                            <button>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;