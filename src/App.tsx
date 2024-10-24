import "./App.css";
import { Button } from "../components/ui/button";

export default function App() {
  return (
    <div>
      <Button variant="link">
        <a href="/login">Login</a>
      </Button>
      <Button variant="link">
        <a href="/signup">Signup</a>
      </Button>
    </div>
  );
}
