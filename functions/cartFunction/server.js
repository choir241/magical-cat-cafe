import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();

const getRoutes = (request, response) => {
  response.json({ routes: ["/", "/addToCart"]});
};

const getCart = (request, response) => {
  response.json({ name: "Hatsune Miku" });
};

app.get("/", getRoutes);
app.get("/addToCart", getCart);

export default async (context) => await app.attach(context);
