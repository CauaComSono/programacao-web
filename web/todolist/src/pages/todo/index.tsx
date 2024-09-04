
import React, { useState } from 'react';
import './styles.css';
import { TodoProps } from "../../@types/todo";
import CriarTodo from "../../components/criarTodo";
import TodoList from "../../components/todolist";


enum TodoPages {
  'criar' = 'criar',
  'listar' = 'listar'
}

function Todo() {
  const [getTodos, setTodos] = useState<TodoProps[]>([
    { id: 1, titulo: 'tarefa 1'},
    { id: 2, titulo: 'tarefa 2'},
    { id: 3, titulo: 'tarefa 3'},
    { id: 4, titulo: 'tarefa 4'},
    { id: 5, titulo: 'tarefa 5'}
])

const [getPaginaAtual, setPaginalAtual] = useState<TodoPages>(TodoPages.listar)

const renderizarBotoes = () => (
  <div>
    <button onClick={() => setPaginalAtual(TodoPages.criar)}>Criar</button>
    <button onClick={() => setPaginalAtual(TodoPages.listar)}>Listar</button>
  </div>
)

const renderizarComponente = () => {
  switch (getPaginaAtual) {
    case TodoPages.criar:
      return <CriarTodo criarTodo={(novoTodo: TodoProps) => {
        const id: number = getTodos.length + 1
        novoTodo.id = id
        const tmpTodos: TodoProps[] = [...getTodos, novoTodo]
        setTodos(tmpTodos)
        }}/>

    case TodoPages.listar:
      return<TodoList getTodos={getTodos} setTodos={(novaLista: TodoProps[]) => setTodos(novaLista)}/>
    default:
      return<TodoList getTodos={getTodos} setTodos={(novaLista: TodoProps[]) => setTodos(novaLista)}/>
  }
}

  return (
    <div style={{textAlign : "center"}}>
     {renderizarBotoes()}
     {renderizarComponente()}
      
    </div>
  );
}

export default Todo;
