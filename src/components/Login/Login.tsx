import { useContext, useEffect, useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserAddOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Context } from "../../Context/AuthContext";
import useAuth from "../../Context/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    primeiro_nome: "",
    segundo_nome: "",
    email: "",
    telefone: "",
    password: "",
  });

  const { handleRegister } = useContext(Context);
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  const validatePhone = (rule, value) => {
    return new Promise((resolve, reject) => {
      // Regular expression for a Brazilian phone number (including DDD)
      const phoneRegex = /^\([1-9]{2}\) [2-9][0-9]{3,4}-[0-9]{4}$/;

      if (!value || phoneRegex.test(value)) {
        resolve(); // Pass the validation
      } else {
        reject("Telefone inválido!"); // Fail the validation
      }
    });
  };

  const formatPhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    // Remove all non-numeric characters from the input
    const numericValue = inputValue.replace(/\D/g, "");

    // Apply the mask
    const formattedValue = numericValue
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");

    setUser({ ...user, telefone: formattedValue });
  };

  const onFinish = () => {
    handleRegister(user);
    window.location.href = "https://www.lucrefy.com/";
  };

  useEffect(() => {
    if (authenticated) {
      navigate("/dashboard");
    }
  }, [authenticated, navigate]);

  return (
    <Form
      name="register-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{ width: "50%" }}
    >
      <Form.Item
        name="primeiro_nome"
        rules={[
          {
            required: true,
            message: "Por favor, digite seu primeiro nome!",
          },
        ]}
      >
        <Input
          prefix={<UserAddOutlined className="site-form-item-icon" />}
          placeholder="Primeiro Nome"
          onChange={(e) => setUser({ ...user, primeiro_nome: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        name="segundo_nome"
        rules={[
          {
            required: true,
            message: "Por favor, digite seu sobrenome!",
          },
        ]}
      >
        <Input
          prefix={<UserAddOutlined className="site-form-item-icon" />}
          placeholder="Sobrenome"
          onChange={(e) => setUser({ ...user, segundo_nome: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "Email inválido",
          },
          {
            required: true,
            message: "Por favor, digite seu email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        name="telefone"
        rules={[
          {
            validator: validatePhone,
            type: "number",
            message: "Telefone inválido",
          },
          {
            required: true,
            message: "Por favor, digite seu telefone!",
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Telefone"
          value={user.telefone}
          onChange={formatPhoneNumber}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Por favor, digite sua senha!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Criar Conta
        </Button>
      </Form.Item>
      <Divider />
    </Form>
  );
};

export default Register;
