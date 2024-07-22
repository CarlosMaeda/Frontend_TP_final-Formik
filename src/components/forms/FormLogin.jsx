import React, { useState } from "react";
import { Formik } from "formik";
import "./forms.css";
import {
  FaCheckCircle,
  FaRegEye,
  FaRegEyeSlash,
  FaTimesCircle,
} from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { Input, Label } from "../customInput/Input";
import Boton from "../customButtons/Boton";
import { login } from "../../fetching/auth.fetching";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  return (
    <div className="formulario--contenedor">
      <h2>Formulario de Registro</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.username) {
            errors.username = "Debe ingresar un Nombre de usuario";
          } else if (!/^[a-zA-Z0-9\_\-]{4,16}$/.test(values.username)) {
            errors.username =
              "El nombre de usuario solo puede contener letras, numeros, guiones y guion_bajo";
          }

          if (!values.email) {
            errors.email = "Debe ingresar un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errors.email = "Email invalido";
          }

          if (!values.password) {
            errors.password = "Debes ingresar una contraseña";
          } else if (!/^.{6,20}$/.test(values.password)) {
            errors.password =
              "La contraseña debe tener entre 6 y 20 caracteres";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          /* setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400); */
          console.log(values);

          const response = login(values);
          resetForm();

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleClick,
          isSubmitting,
        }) => (
          <form
            id="formulario"
            className="formulario  formulario-login"
            onSubmit={handleSubmit}
          >
            <div className="formulario--grupo" id="grupo--usuario">
              <Label
                htmlFor="username"
                className="formulario--label"
                text="Usuario"
              ></Label>
              <div className="formulario--grupo-input">
                <Input
                  id="username"
                  type="username"
                  name="username"
                  className="formulario--input"
                  placeholder="JohnDoe123"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.username && touched.username && (
                  <div className="formulario--grupo-error">
                    {errors.username}
                  </div>
                )}
              </div>
            </div>

            <div className="formulario--grupo" id="grupo--usuario">
              <Label
                htmlFor="email"
                className="formulario--label"
                text="Correo Electronico"
              ></Label>
              <div className="formulario--grupo-input">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="formulario--input"
                  placeholder="example@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <div className="formulario--grupo-error">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="formulario--grupo password" id="grupo--usuario">
              <Label
                htmlFor="password"
                className="formulario--label"
                text="Ingrese una contraseña"
              ></Label>
              <div className="formulario--grupo-input">
                <Input
                  id="password"
                  type={mostrarPassword ? "text" : "password"}
                  name="password"
                  className="formulario--input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <RiEyeCloseLine
                  type="text"
                  className={`formulario--password-ver ${
                    mostrarPassword ? "oculto" : ""
                  }`}
                  id="ver"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                />
                <FaRegEye
                  type="text"
                  className={`formulario--password-ver ${
                    mostrarPassword ? "" : "oculto"
                  }`}
                  id="ocultar"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                />
                {errors.password && touched.password && (
                  <div className="formulario--grupo-error">
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            <div className="formulario--grupo formulario--grupo-btn-enviar">
              <Boton
                type="submit"
                className="formulario--btn"
                text="Iniciar Sesion"
              />
              <p className="formulario--link">
                ¿Todavía no tienes una cuenta?
                <Link to="/register">Registrate</Link>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
