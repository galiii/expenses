import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    //destructure the fields from that
    const { email, password } = formData;

    const onChange = (e: any) => {
        console.log("loginnn", [e.target.value]);
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt />Login
                </h1>
                <p>Please login</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login;