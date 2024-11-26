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
    <NavigationMenu className="py-4 alig">
      <NavigationMenuList>
      <NavigationMenuItem>
            <a href="/" className={`text-2xl ${buttonVariants({variant: "link"})} textColor hover:opacity-70`}>
                Menu
            </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          
        {user?
           <a href="" onClick={(e)=>{
            e.preventDefault()
            logoutAccount()
          }}>Logout</a>
        :
        <a href="/login" className={`text-2xl ${buttonVariants({variant: "link"})} textColor hover:opacity-70`}>
        Login
        </a>
          }
        </NavigationMenuItem>

        <NavigationMenuItem>
            <a href="/cart" className={`text-2xl ${buttonVariants({variant: "link"})} textColor hover:opacity-70`}>
                <FaCartShopping />
            </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
