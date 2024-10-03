import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IFoodData } from "api/getData";

export default function FoodCard({ foodData }: { foodData: IFoodData }) {
  return (
    <Card>
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
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
