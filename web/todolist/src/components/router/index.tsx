import React, {useState} from "react";
import Todo from "../../pages/todo";
import Home from "../../pages/home";
import Sobre from "../../pages/sobre";

enum RouterPages  {
    'home' = 'home',
    'todo' = 'todo',
    'sobre' = 'sobre'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = 
    useState<RouterPages>(RouterPages.home)

    const renderizarBotoes = () => (
        <div>
            <button onClick={() => setPaginaAtual(RouterPages.home)}>Inicio</button>
            <button onClick={() => setPaginaAtual(RouterPages.todo)}>Todo</button>
            <button onClick={() => setPaginaAtual(RouterPages.sobre)}>Sobre</button>
        </div>
    )

    const renderizarPaginas = () => {
      switch (getPaginaAtual) {
        case RouterPages.home: return <Home />
        case RouterPages.todo: return <Todo />
        case RouterPages.sobre: return <Sobre />
        default: return <div><h1>Inicio</h1></div>
      }
    }

    return (
        <div>
            {renderizarBotoes()}
            {renderizarPaginas()}
        </div>
    )
}

export default Router;
