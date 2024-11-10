import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";
import { buttonVariants, Button } from "./ui/button";
import { FaCartShopping } from "react-icons/fa6";
import {logoutAccount} from "../api/userApi"

export default function Nav({numOfCartItems}: {numOfCartItems: number}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <a href="/cart" className={`${buttonVariants({variant: "link"})} hover:opacity-70`}>
                {numOfCartItems}<FaCartShopping />
            </a>
        </NavigationMenuItem>
            <Button onClick={()=>logoutAccount()}>Logout</Button>
        <NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
