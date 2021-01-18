import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path} className={style.dialogLink} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.text}</div>
    )
}

const Dialogs = () => {
    const dialogsData = [
        {name: 'Dimich', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Goga', id: 3}
    ]

    const messageData = [
        {message: 'BlaBla', id: 1},
        {message: 'BlaBla', id: 1},
        {message: 'BlaBla', id: 1},

    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={style.dialogsItem}>
                <Message text={messageData[0].message}/>

            </div>
        </div>
    )

}

export default Dialogs