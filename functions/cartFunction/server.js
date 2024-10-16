import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();
import cartRoutes from "./routes/cart.js";
import userRoutes from "./routes/user.js";

app.use("/", cartRoutes);
app.use("/", userRoutes);

const routes = (request, response) => {
  response.json({
    getRoutes: ["/"],
    putRoutes: ["/editCart/:docId"],
    postRoutes: ["/addToCart", "/signup"],
    deleteRoutes: ["/deleteCart/:docId"]
  });
};

app.get("/", routes);

export default async (context) => await app.attach(context);
