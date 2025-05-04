import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import routeCOnfig from "./app/routes";
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeCOnfig)],
}).catch((err) => console.error(err));
