import {
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_PHOTO_SUCCESS,
    UPDATE_USER_PROFILE_PHOTO_FAIL
} from '../actions/types';

const initialState = {
    profile: null
}

export default function Profile(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_USER_PROFILE_SUCCESS:
            return{
                ...state,
                profile: payload.profile
            }
        case GET_USER_PROFILE_FAIL:
            return{
                ...state
            }

        case UPDATE_USER_PROFILE_SUCCESS:
        case UPDATE_USER_PROFILE_PHOTO_SUCCESS:
            return{
                ...state,
                profile: payload.profile
            }
        case UPDATE_USER_PROFILE_FAIL:
        case UPDATE_USER_PROFILE_PHOTO_FAIL:
            return{
                ...state
            }

        default:
            return state
    }
}