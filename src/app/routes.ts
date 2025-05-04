import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
const routeCOnfig: Route[] = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Details page",
  },
];

export default routeCOnfig;
