import express, { Express } from "express";
let app: Express = express();

// Change views folder location.
app.set("views", "./src/views");

// Pages.
import HomePage from "./home";
import AboutUSPage from "./about";
import ContactPage from "./contact";
import FAQPage from "./faq";
import TestimonialPage from "./testimonial";

// All routes.
app.use("/", HomePage);
app.use("/about-us", AboutUSPage);
app.use("/testimonial", TestimonialPage);
app.use("/faq", FAQPage);
app.use("/contact-us", ContactPage);

export default app;
