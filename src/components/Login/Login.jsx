import React,{useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { saveData } from "../../Utils/localStorage";
import { loadData } from '../../Utils/localStorage';
function Login() {
  const userId = loadData("user_id");
  const navigate = useNavigate();
  useEffect(function(){
    if(userId != null && userId > 0)
    {
      navigate('/dashboard');
    }

  },[])

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        //e.preventDefault();
        try {

              fetch(process.env.REACT_APP_API_URL+"api/login", {
                method: "POST",
                body: JSON.stringify({ email: values.email,password : values.password }),
                headers: { "content-type": "application/json" },

            }).then((d) => d.json()
            ).then((res) => {
              if(res.status == "SUCCESS")
              {
                saveData("user_id", res.response_data.user_id);
                window.location.href = process.env.REACT_APP_LOGIN + "/dashboard";
              }
              else 
              {
                toast.error("Invalid crdentials");
              }
            }).catch((err) => {
                console.log("e", err);
                toast.error("Invalid crdentials");
            });

        } catch (error) {
          toast.error("Invalid credentials");
        }
      },
    });
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form class="user" onSubmit={handleSubmit}>
                        <div class="form-group">
                          <input
                            name="email"
                            type="email"
                            class="form-control form-control-user"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {errors.email && touched.email ? (
                          <p className="error-message">{errors.email}</p>
                        ) : null}
                        <div class="form-group">
                          <input
                            name="password"
                            type="password"
                            id="password"
                            class="form-control form-control-user"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {errors.password && touched.password ? (
                          <p className="error-message">{errors.password}</p>
                        ) : null}
                        <input
                          type="submit"
                          value="SIGN IN"
                          class="btn btn-primary btn-user btn-block"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
