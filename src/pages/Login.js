import '../styles/Login.css'
import Meta from "../components/Header/Meta/Meta";
import PageHead from "../components/Layout/PageHead";

const Login = () => {
    return ( 
        <>
        <Meta title='Sign In' />
        <PageHead title='My Account' page='Account' />
        <div className="container login">
            <div className="top_login">
                <h2>Login</h2>
                <p>Please login using account detail bellow.</p>
            </div>
            <div className="login_form">
                <input type="email" name="" id="" placeholder="Email Address" />
                <input type="password" name="" id="" placeholder="Password" />
                <p className='login_left_p'>Forgot your password?</p>
                <button>Sign In</button>
                <p>Don’t have an Account?Create account</p>
            </div>

        </div>
        </>
     );
}
 
export default Login;