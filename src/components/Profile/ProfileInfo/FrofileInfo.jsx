import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    return (<>
            {
                !props.profile ? <Preloader/>
                    : <div>
                        <div>
                            <img src="https://arte1.ru/images/detailed/4/23608.jpg" alt=""/>
                        </div>
                        <img src={props.profile.photos.large} alt=""/>
                        <div>avatar + description</div>
                    </div>
            }
        </>
    )
}

export default ProfileInfo;