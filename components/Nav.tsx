import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";
import { buttonVariants, Button } from "./ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { logoutAccount } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { getAccount, IUser } from "../api/userApi";
import { useState, useEffect } from "react";

export default function Nav({ numOfCartItems }: { numOfCartItems?: number }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getAccount({ setUser: (e) => setUser(e) });
  }, []);

  return (
    <NavigationMenu className="pt-6">
      <NavigationMenuList>
      <NavigationMenuItem>
          <a
            href="/menu"
            className={`${buttonVariants({ variant: "link" })} hover:opacity-70`}
          >
            Menu
            </a>
      </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="/cart"
            className={`${buttonVariants({ variant: "link" })} hover:opacity-70`}
          >
            <span className="text-[1rem] pr-4">{numOfCartItems}</span>
            <FaCartShopping className="text-[2rem]" />
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {user ? (
            <Button
              variant={"link"}
              onClick={() => {
                logoutAccount();
                navigate("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button variant={"link"}>
              <a href="/">Login</a>
            </Button>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
