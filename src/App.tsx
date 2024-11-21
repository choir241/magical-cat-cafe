import { Button } from "../components/ui/button";
import FormComponent from "../components/Form";
import { loginAccount, signupAccount } from "../api/userApi";
import { useState, useMemo } from "react";
import { getAccount, IUser } from "../api/userApi";
import Nav from "../components/Nav";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);
  const [buttonToggle, setButtonToggle] = useState<boolean>(false);

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });
  }, []);

  return (
    <div className="bg-[#383151] min-h-screen">
      {buttonToggle ? (
        <main className="flex flex-col items-center">
          <Nav/>
          
          <FormComponent
            buttonText="Login"
            onSubmit={() =>
              loginAccount({ accountData: { name, email, password } })
            }
            setName={(e) => setName(e)}
            setEmail={(e) => setEmail(e)}
            setPassword={(e) => setPassword(e)}
          />

          <div className="flex items-center mt-4">
            <span>Don't have an account?</span>
            <Button variant={"link"} onClick={() => setButtonToggle(false)} className="textColor">
              Signup
            </Button>
          </div>
        </main>
      ) : (
        <main className="flex flex-col items-center">
          <FormComponent
            buttonText="Signup"
            onSubmit={() =>
              signupAccount({ accountData: { name, email, password } })
            }
            setName={(e) => setName(e)}
            setEmail={(e) => setEmail(e)}
            setPassword={(e) => setPassword(e)}
          />

          <div className="flex items-center mt-4">
            <span >Already have an account?</span>
            <Button className="textColor" variant={"link"} onClick={() => setButtonToggle(true)}>
              Login
            </Button>
          </div>
        </main>
      )}
    </div>
  );
}
