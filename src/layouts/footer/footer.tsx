import React from "react";
import Copyright from "./copyright";
import { footer } from "./data";
import Widgets from "./widget/widget";
const { widgets } = footer;

export default function Footer() {
  return (
    <footer className="mt-[50px] lg:mt-14 2xl:mt-16">
      <Widgets widgets={widgets} />
      <Copyright />
    </footer>
  );
}
