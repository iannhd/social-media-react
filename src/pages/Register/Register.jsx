import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>The Social App</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, veritatis nam. Enim, consectetur. Omnis.
                </p>
                <span>Already have an account?</span>
                <Link to='/login'>
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <input type="confirmPassword" placeholder='Confirm Password' />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register