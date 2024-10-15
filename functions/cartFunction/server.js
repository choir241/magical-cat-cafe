import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();
import cartRoutes from "./routes/cart.js";

app.use("/", cartRoutes);

const getRoutes = (request, response) => {
  response.json({
    routes: ["/", "/addToCart", "/editCart/:docId", "/deleteCart/:docId"],
  });
};

app.get("/", getRoutes);

export default async (context) => await app.attach(context);
