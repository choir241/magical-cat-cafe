import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IFoodData } from "api/getData";
import { Button } from "./ui/button";
import { BsPlusCircleFill } from "react-icons/bs";

export default function FoodCard({
  foodData,
  className,
}: {
  foodData: IFoodData;
  className?: string;
}) {
  function addItemToCart() {}

  return (
    <Card className={`flex flex-col items-center w-[20rem] ${className}`}>
      <CardHeader>
        <CardTitle>
          {foodData.name} {foodData.price}
        </CardTitle>
        <CardDescription>{foodData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={`../src/public${foodData.gallery}`} />
      </CardContent>
      <CardFooter>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addItemToCart();
          }}
        >
          <BsPlusCircleFill />
        </Button>
      </CardFooter>
    </Card>
  );
}
