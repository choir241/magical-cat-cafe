import { Button } from "../components/ui/button";
import FormComponent from "../components/Form";
import { loginAccount, signupAccount, getAccount, IUser } from "../api/userApi";
import { useState, useMemo } from "react";
// import { getCart, addToCart } from "../api/cartApi";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore/lite";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);
  const [buttonToggle, setButtonToggle] = useState<boolean>(false);
  const [cart, setCart] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>();

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });
  }, []);

  // getCart({ setCartData: (e) => setCart(e) });  

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
