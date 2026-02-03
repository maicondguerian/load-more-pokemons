import React from "react";
import { createRoot } from "react-dom/client";
import { PokemonList } from "./Pages/PokemonList/PokemonList";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<PokemonList />);
