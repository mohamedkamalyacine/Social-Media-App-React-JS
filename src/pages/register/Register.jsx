import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Be with Friends.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, minima,
            doloribus laudantium quos illo veniam ullam exercitationem numquam
            quibusdam architecto reiciendis ducimus omnis nemo saepe neque
            accusamus facilis beatae est.
          </p>
          <span>Do you have an account?</span>

          {/* if Login button is clicked go to Login Page */}
          <Link to="/login">
            <button>Login</button>
          </Link>
        
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Full Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
