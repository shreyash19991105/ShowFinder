import { Form, message } from "antd";
import React, { useEffect } from "react";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/users";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        console.log(response.message);
        localStorage.setItem("token", response.data);
        navigate("/");
      } else {
        message.error(response.message);
        console.log(response.message);
      }
    } catch (error) {
      message.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
     navigate('/');
    } 
  }, []);
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="flex-col items-center justify-center card p-3 ">
        <h1 className="text-xl mb-1">Welcome Back ! Login to ShowFinder</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="LOGIN" type="submit" />
            <div>
              New to ShowFinder?
              <Link to="/register" className="text-primary">
                <span className="underline "> Register</span>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
