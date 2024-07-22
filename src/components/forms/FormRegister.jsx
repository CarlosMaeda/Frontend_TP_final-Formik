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
import { register } from "../../fetching/auth.fetching";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarPassword2, setMostrarPassword2] = useState(false);
  return (
    <div className="formulario--contenedor">
      <h2>Formulario de Registro</h2>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Debe ingresar tu Nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.name)) {
            errors.name = "El nombre solo puede contener letras y espacios";
          }

          if (!values.lastname) {
            errors.lastname = "Debe ingresar tu Apellidos";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.lastname)) {
            errors.lastname =
              "El apellido solo puede contener letras y espacios";
          }

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

          if (!values.password2) {
            errors.password2 = "Debes validar tu contraseña";
          } else if (!/^.{6,20}$/.test(values.password2)) {
            errors.password2 =
              "La contraseña debe tener entre 6 y 20 caracteres";
          } else if (values.password2 !== values.password) {
            errors.password2 = "Las contraseñas no coinciden";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          console.log(values);

          const response = register(values);
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
          /* and other goodies */
        }) => (
          <form
            id="formulario"
            className="formulario  formulario-login"
            onSubmit={handleSubmit}
          >
            <div className="formulario--grupo" id="grupo--usuario">
              <Label
                htmlFor="name"
                className="formulario--label"
                text="Nombres"
              ></Label>
              <div className="formulario--grupo-input">
                <Input
                  id="name"
                  type="name"
                  name="name"
                  className="formulario--input"
                  placeholder="John Robert"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {/* <FaTimesCircle />
                <FaCheckCircle /> */}
                {errors.name && touched.name && (
                  <div className="formulario--grupo-error">{errors.name}</div>
                )}
              </div>
            </div>

            <div className="formulario--grupo" id="grupo--usuario">
              <Label
                htmlFor="lastname"
                className="formulario--label"
                text="Apellidos"
              ></Label>
              <div className="formulario--grupo-input">
                <Input
                  id="lastname"
                  type="lastname"
                  name="lastname"
                  className="formulario--input"
                  placeholder="Doe Jr."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
                {errors.lastname && touched.lastname && (
                  <div className="formulario--grupo-error">
                    {errors.lastname}
                  </div>
                )}
              </div>
            </div>

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

            <div className="formulario--grupo" id="grupo--usuario">
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

            <div className="formulario--grupo" id="grupo--usuario">
              <Label
                htmlFor="password2"
                className="formulario--label"
                text="Confirme su contraseña"
              ></Label>
              <div className="formulario--grupo-input">
                <Input
                  id="password2"
                  type={mostrarPassword2 ? "text" : "password"}
                  name="password2"
                  className="formulario--input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password2}
                />
                <RiEyeCloseLine
                  type="text"
                  className={`formulario--password-ver ${
                    mostrarPassword2 ? "oculto" : ""
                  }`}
                  id="ver"
                  onClick={() => setMostrarPassword2(!mostrarPassword2)}
                />
                <FaRegEye
                  type="text"
                  className={`formulario--password-ver ${
                    mostrarPassword2 ? "" : "oculto"
                  }`}
                  id="ocultar"
                  onClick={() => setMostrarPassword2(!mostrarPassword2)}
                />
                {errors.password2 && touched.password2 && (
                  <div className="formulario--grupo-error">
                    {errors.password2}
                  </div>
                )}
              </div>
            </div>

            <div className="formulario--grupo formulario--grupo-btn-enviar">
              <Boton
                type="submit"
                className="formulario--btn"
                text="Registrarse"
              />
              <p className="formulario--link">
                ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
              </p>
              {/* <p className="formulario--success">
                ¡¡¡ Formulario enviado exitosamente !!!
              </p> */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormRegister;
