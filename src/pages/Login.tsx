import { Button } from "../../components/ui/button";
import FormComponent from "../../components/Form";
import { loginAccount, signupAccount } from "../../api/userApi";
import { useState } from "react";
import Nav from "../../components/Nav";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [buttonToggle, setButtonToggle] = useState<boolean>(true);

  return (
    <div className="bg-[#383151] min-h-screen">
      {buttonToggle ? (
        <main className="flex flex-col items-center">
          <Nav />

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
            <span className="text-xl">Don't have an account?</span>
            <Button
              variant={"link"}
              onClick={() => setButtonToggle(false)}
              className="textColor text-xl"
            >
              Signup
            </Button>
          </div>
        </main>
      ) : (
        <main className="flex flex-col items-center">
          <Nav />

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
            <span className="text-xl">Already have an account?</span>
            <Button
              className="text-xl textColor"
              variant={"link"}
              onClick={() => setButtonToggle(true)}
            >
              Login
            </Button>
          </div>
        </main>
      )}
    </div>
  );
}
