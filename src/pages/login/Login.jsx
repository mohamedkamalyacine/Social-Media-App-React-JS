import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Guys.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, minima,
            doloribus laudantium quos illo veniam ullam exercitationem numquam
            quibusdam architecto reiciendis ducimus omnis nemo saepe neque
            accusamus facilis beatae est.
          </p>
          <span>Don't you have an account?</span>
          
          {/* if Register button is clicked go to Register page */}
          <Link to="/register">
            <button>Register</button>
          </Link>

        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
