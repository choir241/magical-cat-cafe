import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";
import { buttonVariants } from "./ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { getAccount, IUser } from "../api/userApi";
import { useMemo, useState } from "react";
import { logoutAccount } from "../api/userApi";

export default function Nav() {

  const [user, setUser] = useState<IUser | null>(null);

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });
  }, []);

  return (
    <NavigationMenu className="py-4">
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
