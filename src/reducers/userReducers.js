import { UPDATE_USER } from "../action/userAction";
import { DELETE_USER } from "../action/userAction";

export default function userReducer(state = '', {type, payload}) {
    console.log('userReducer is invoked..')
    switch (type) {
        case UPDATE_USER:
            return payload.user;
        case DELETE_USER:
            console.log('delete function inside userReducers is invoked..'+payload.user);
            return payload.user
        default:
            return state;
    }
}