import React from "react";
import { App } from "../App";

export default {
  title: "Home/App",
  component: App,
};

const Template = (args) => <App bgColor={args.bgColor} />;

export const BackgroundBlack = Template.bind({});

BackgroundBlack.args = {
  bgColor: "black",
};

export const BackgroundRed = () => <App bgColor="red" />;
