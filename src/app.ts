import { Makanan } from "./classes/Makanan.js";
import { Minuman } from "./classes/Minuman.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Snack } from "./classes/Snack.js";

// DOM

const dateTime: Date = new Date();
const tanggal = document.getElementById('tanggal');
tanggal?.append("" + dateTime.toDateString());

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const jenis = document.querySelector("#jenis") as HTMLSelectElement;
const nama = document.querySelector("#nama") as HTMLInputElement;
const jam = document.querySelector("#jam") as HTMLInputElement;
const porsi = document.querySelector("#porsi") as HTMLInputElement;

// List Template Instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  //   Tuples
  let values: [string, string, number];
  values = [nama.value, jam.value, porsi.valueAsNumber]

  let doc: HasFormatter;
  if (jenis.value === "makanan") {
    doc = new Makanan(...values);
  } else if (jenis.value === "minuman"){
    doc = new Minuman(...values);
  } else {
    doc = new Snack (...values);
  }

  list.render(doc, jenis.value, "end");
});
