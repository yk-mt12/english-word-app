import './App.css'
import { TodoBoard } from "./components/TodoBoard";
import {Navigation} from './components/Navigation'

export const App = () => {
  return(
    <>
    <Navigation />
     <TodoBoard />
     </>)
};
