import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="register">
                <form className="login-form">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control mb-3" placeholder="enter name" />
                        <label className="form-label">Contact No.</label>
                        <input type="text" className="form-control mb-3" placeholder="phone" />
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control mb-3" placeholder="email address" />
                        <div>We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control mb-3" />
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control mb-3" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked />
                        <label className="form-check-label" for="exampleCheck1">
                            Login once registered
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
