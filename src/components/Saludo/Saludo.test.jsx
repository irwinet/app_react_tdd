import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Saludo from './index'

test("Testeo del componente Saludo (render)", async() => {
    render(<Saludo usuario="Irwinet" mensaje="Hola Mundo"></Saludo>)
})

test("Testeo del componente Saludo (renderiza el usuario)", async() => {
    render(<Saludo usuario="Irwinet" mensaje="Hola Mundo"></Saludo>)

    const usuario = await screen.findByRole("heading")

    screen.debug();
    expect(usuario).toHaveTextContent("Irwinet")
})

test("Testeo del componente Saludo (con boton)", async() => {
    render(<Saludo usuario="Irwinet" mensaje="Hola Mundo"></Saludo>)

    const boton = await screen.findByRole("button")

    screen.debug();
    expect(boton).toHaveTextContent("Mostrar saludo")
})

test("Testeo del componente Saludo (con click en el boton)", async() => {
    render(<Saludo usuario="Irwinet" mensaje="Hola Mundo"></Saludo>)

    fireEvent.click(screen.getByRole("button"))

    screen.debug();

    const boton = await screen.findByText(/Mundo/)
    expect(boton).toHaveTextContent("Hola Mundo")
})

test("Testeo del componente Saludo (con dos click en el boton)", async() => {
    render(<Saludo usuario="Irwinet" mensaje="Hola Mundo"></Saludo>)

    fireEvent.click(screen.getByRole("button"))
    fireEvent.click(screen.getByRole("button"))
    
    //const boton = await screen.findByText(/Mundo/)
    const botonSinMensaje = await screen.findByText(/Sin/)

    screen.debug();

    expect(botonSinMensaje).toHaveTextContent("Sin mensaje")
})