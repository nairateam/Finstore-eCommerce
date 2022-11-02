import Meta from "../components/Header/Meta/Meta";
import PageHead from "../components/Layout/PageHead";

const Signup = () => {
    return ( 
        <>
        <Meta title='Sign Up' />
        <PageHead title='Sign up' page='Signup' />
        <div className="container signup">
            <div className="top_login">
                    <h2>Create An Account</h2>
                    <p>Please provide your credentials below.</p>
            </div>
                <div className="login_form">
                    <input type="email" name="" id="" placeholder="Email Address" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <p className='login_left_p'>Forgot your password?</p>
                    <button>Sign In</button>
                    <p>Do you have an Account? Login Here</p>
                </div>
        </div>
        </>
     );
}
 
export default Signup;