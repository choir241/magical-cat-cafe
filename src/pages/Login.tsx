import { useState } from "react";
import "./login/RenderLogin";
import RenderLogin from "./login/RenderLogin";
import RenderRegister from "./login/RenderRegister";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [buttonToggle, setButtonToggle] = useState<boolean>(true);

  return (
    <div className="bg-[#383151] min-h-screen">
      {buttonToggle ? (
        <RenderLogin {...{name, email, password, setName: (e:string)=>setName(e), setEmail: (e:string)=>setEmail(e), setPassword: (e:string)=>setPassword(e), setButtonToggle: (e:boolean)=>setButtonToggle(e)}}/>
      ) : (
        <RenderRegister {...{name, email, password, setName: (e:string)=>setName(e), setEmail: (e:string)=>setEmail(e), setPassword: (e:string)=>setPassword(e), setButtonToggle: (e:boolean)=>setButtonToggle(e)}}/>
      )}
    </div>
  );
}
