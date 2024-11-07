import { Button } from "../components/ui/button";
import FormComponent from "../components/Form";
import { loginAccount, signupAccount } from "../api/userApi";
import { useState, useMemo } from "react";
import { getAccount, IUser } from "../api/userApi";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<IUser>();
  const [buttonToggle, setButtonToggle] = useState<boolean>(false);

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });
  }, []);

  return (
    <>
      {buttonToggle ? (
        <main>
          <FormComponent
            buttonText="Login"
            onSubmit={() =>
              loginAccount({ accountData: { name, email, password } })
            }
            setName={(e) => setName(e)}
            setEmail={(e) => setEmail(e)}
            setPassword={(e) => setPassword(e)}
          />

          <span>Don't have an account?</span>
          <Button onClick={() => setButtonToggle(false)}>Signup</Button>
        </main>
      ) : (
        <main>
          <FormComponent
            buttonText="Signup"
            onSubmit={() =>
              signupAccount({ accountData: { name, email, password } })
            }
            setName={(e) => setName(e)}
            setEmail={(e) => setEmail(e)}
            setPassword={(e) => setPassword(e)}
          />
          <span>Already have an account?</span>
          <Button onClick={() => setButtonToggle(true)}>Login</Button>
        </main>
      )}
    </>
  );
}
