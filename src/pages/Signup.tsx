import FormComponent from "../../components/Form";
import { signupAccount } from "../../api/userApi";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <FormComponent
      buttonText="Signup"
      onSubmit={() => signupAccount({ accountData: { name, email, password } })}
      setName={(e) => setName(e)}
      setEmail={(e) => setEmail(e)}
      setPassword={(e) => setPassword(e)}
    />
  );
}
