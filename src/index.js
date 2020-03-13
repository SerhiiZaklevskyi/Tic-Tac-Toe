/* eslint-disable no-new */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import HeaderComponent from "./components/HeaderComponent";
import FieldComponent from "./components/FieldComponent";
import ScoreComponent from "./components/ScoreComponent";

const fieldWrapper = document.querySelector("#gameField");
const score = document.querySelector("#score");
const header = document.querySelector("#headerWrapper");
new HeaderComponent(header);
new FieldComponent(fieldWrapper);
new ScoreComponent(score);
