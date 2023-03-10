import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import useWebsiteTitle from "../../hooks/useWebisteTitle";
import axios from "axios";
import { api_url } from "../../App";

export default function Register() {
  useWebsiteTitle("Zarejestruj się");
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    second_password: "",
  });
  const [message, setMessage] = useState("");

  const registerFunction = async (e) => {
    e.preventDefault();

    console.log(
      `DATA: ${loginData.email} ${loginData.password} ${loginData.second_password}`
    );

    axios.post(`${api_url}/authenticated/register`, loginData).then((res) => {
      setMessage(res.data.message);

      if (
        res.data.message === "Zarejestrowano, sprawdź maila by aktywować konto"
      ) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    });
  };

  return (
    <main className={`${styles.main_container}`}>
      <div className={`${styles.back_arrow}`}>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Link>
      </div>
      <div className={`${styles.div_form}`}>
        <form className={`${styles.register_form}`}>
          <input
            type="email"
            name="login"
            placeholder="Podaj login"
            autoComplete="off"
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Podaj hasło"
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
          />
          <input
            type="password"
            name="password2"
            placeholder="Powtórz hasło"
            onChange={(e) => {
              setLoginData({ ...loginData, second_password: e.target.value });
            }}
          />

          <button
            className={`${styles.register_button}`}
            onClick={registerFunction}
          >
            Zarejestruj się
          </button>
        </form>
        {message ? (
          <div
            className={
              message === "Zarejestrowano, sprawdź maila by aktywować konto"
                ? `${styles.good_message}`
                : `${styles.error_message}`
            }
          >
            {message}
          </div>
        ) : null}
      </div>
    </main>
  );
}
