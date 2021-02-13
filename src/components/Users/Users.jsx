import React from 'react'
import userAvatar from '../../image/avatar.jpg'
import style from './Users.module.css'
import {NavLink} from "react-router-dom";

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(page => {
                        return <span className={`${style.users_page} ${props.currentPage === page && style.active}`}
                                     onClick={(e) => {
                                         props.onChangePage(page)
                                     }}
                                     key={`page_${page}`}>{page}</span>
                    })
                }
            </div>
            {
                props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile' + user.id}>
                                    <img src={user.photos.small === null ? userAvatar : user.photos.small} alt=""
                                         width='150px' height='100px'/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.city"}</div>
                                <div>{"user.location.country"}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}


export default Users