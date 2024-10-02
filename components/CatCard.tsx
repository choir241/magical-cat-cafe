import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ICatData } from "api/getData";

export default function CatCard({catData}:{catData: ICatData}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{catData.breed}</CardTitle>
        <CardDescription>{catData.gallery}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src = {catData.gallery} />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
