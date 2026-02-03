import React from "react";
import { createRoot } from "react-dom/client";
import { PokemonList } from "./Pages";
import { QueryProvider } from "./core/providers";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <QueryProvider>
    <PokemonList />
  </QueryProvider>,
);
