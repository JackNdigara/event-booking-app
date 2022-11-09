import React, { useState } from "react";
import Form from "./Form";
import Login from "./Login";

function FormLogin({ data, setData }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <Form data={data} setData={setData} />
      ) : (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default FormLogin;
