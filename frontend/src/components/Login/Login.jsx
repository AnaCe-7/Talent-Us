import { Navbar } from "../Navbar/Navbar";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="loginImg">
          <img src="../../../src/img/logo.svg" alt="Logo Talentus" />
        </div>
        <form className="loginForm">
          <p>Login:</p>
          <section className="loginBtns">
            <button>Usuario</button>
            <button>Contraseña</button>
          </section>
          <section className="loginBtnsOption">
            <button>Sing up</button>
            <button>Login</button>
          </section>
        </form>
      </div>
      <Navbar />
    </>
  );
};
