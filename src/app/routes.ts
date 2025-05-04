import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routeCOnfig: Route[] = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
];

export default routeCOnfig;
