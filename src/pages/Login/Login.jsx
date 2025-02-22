import "./Login.css"
import Logo from '../../assets/logo.png'
import { useState } from "react"



const Login = () => {

  const [signState, setSignState] = useState("Sign In")


  return (
    <div className='login'>
<img src={Logo} className="login-logo"  alt=""/>
<div className="login-form">
  <h2>{signState}</h2>
  <form>
  {signState==="Sign Up"?<input type="text" placeholder="Your Name"/>:<></>}

<input type="email" placeholder=" Email"/> 
<input type="password" placeholder="Password"/>
<button>{signState}</button>
<div className="form-help">
  <div className="remember">
  <input type="checkbox"/>
  <label htmlFor="">Remember Me</label>
  </div>
<p>Need Help?</p>
</div>
 </form>
<div className="form-switch">
{signState==="Sign In"?<p>New to Netflix ? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span>
</p>:<p>Already have account ? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
  

</div>


</div>
    </div>
  )
}

export default Login