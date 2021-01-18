import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/profile' component={Profile}/> возвращает компонент в виде функции*/}
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>} />
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>} /> {/*Возвращает компонент в виде тега*/}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
