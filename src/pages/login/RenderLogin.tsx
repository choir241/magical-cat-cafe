import { Button } from "../../../components/ui/button";
import FormComponent from "../../../components/Form";
import { loginAccount } from "../../../api/userApi";
import Nav from "../../../components/Nav";

export default function RenderLogin({name, email, password, setName, setEmail, setPassword, setButtonToggle}:{name: string, email: string, password: string, setName: (e:string)=>void, setEmail: (e:string)=> void, setPassword: (e:string)=>void, setButtonToggle: (e:boolean)=> void}){
    return(
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
    )
}