import "./base.css";
import UserComponent from "./UserComponent";
import logo from "./logo.svg";

const root = document.body;

const img = document.createElement("img");
img.src = logo;
img.style.cssText = `
  width: 100px;
`;
root.appendChild(img);

UserComponent(root, { name: "fran" });
