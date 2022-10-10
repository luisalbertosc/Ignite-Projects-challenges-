import './global.css';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';


export function App(){
    return (
        <div>
            <Header/>
            <TasksList/>
          
        </div>
    )
}