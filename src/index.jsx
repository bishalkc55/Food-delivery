import React from "react";
import ReactDOMClient from "react-dom/client";
import { Property } from "./screens/Property";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Property />);
