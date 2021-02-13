import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile
    }
}

const withRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withRouterProfileContainer)