import AppExpress from "itznotabug/appexpress";

const app = new AppExpress();

const getRoutes = (req, res) => {
  res.json({routes: ["/"]});
};

app.get("/", getRoutes);

export default async (context) => await app.attach(context)