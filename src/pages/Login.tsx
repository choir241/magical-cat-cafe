import FormComponent from "../../components/Form";
import { loginAccount } from "../../api/userApi";
import { useState } from "react";
import { getAccount } from "../../api/userApi";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  getAccount();

  return (
    <FormComponent
      buttonText="Login"
      onSubmit={() => loginAccount({ accountData: { name, email, password } })}
      setName={(e) => setName(e)}
      setEmail={(e) => setEmail(e)}
      setPassword={(e) => setPassword(e)}
    />
  );
}
