import { request, response } from "express";

export const saludoController = (req = request, res = response) => {
  const data = { 
    "info": "hola soy paty"
  }
  res.send(data);
};
export const saludoController2 = (req = request, res = response) => {
  const data = { 
    "info": "hola soy paty 2"
  }
  res.send(data);
};
