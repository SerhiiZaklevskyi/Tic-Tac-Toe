/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import HeaderComponent from "./components/HeaderComponent";
import FieldComponent from "./components/FieldComponent";
import ScoreComponent from "./components/ScoreComponent";

const fieldWrapper = document.querySelector("#gameField");
const score = document.querySelector("#score");
const header = document.querySelector("#headerWrapper");
const Header = new HeaderComponent(header);

Header.onMount();
Header.render();
const Field = new FieldComponent(fieldWrapper);
Field.onMount();
Field.render();
const Score = new ScoreComponent(score);
Score.onMount();
Score.render();
