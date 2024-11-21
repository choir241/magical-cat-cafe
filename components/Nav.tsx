import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";
import { buttonVariants } from "./ui/button";
import { FaCartShopping } from "react-icons/fa6";

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
            <a href="/menu" className={`${buttonVariants({variant: "link"})} textColor hover:opacity-70`}>
                Menu
            </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <a href="/cart" className={`${buttonVariants({variant: "link"})} textColor hover:opacity-70`}>
                <FaCartShopping />
            </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
