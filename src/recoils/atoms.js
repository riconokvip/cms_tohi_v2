import { atom } from "recoil";

export const textField = atom({
  key: "textField",
  default: "",
});

export const errorGlobal = atom({
  key: "errorGlobal",
  default: "",
});
