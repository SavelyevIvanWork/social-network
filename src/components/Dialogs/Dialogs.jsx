import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog}>Dimych</div>
                <div className={style.dialog}>Andrey</div>
                <div className={style.dialog}>Sveta</div>
                <div className={style.dialog}>Evstegney</div>
            </div>
            <div className={style.dialogsItem}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How</div>
                <div className={style.message}>Shou</div>
            </div>
        </div>
    )

}

export default Dialogs