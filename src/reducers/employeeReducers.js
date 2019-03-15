import { FETCH_EMPLOYEES } from "../action/employeeAction";

export default function employeeReducer(state = '', {type, payload}) {
    console.log('employeeReducer is invoked..')
    switch (type) {
        case FETCH_EMPLOYEES:
            console.log('Fetch Employee is invoked..');
            console.log(payload);
            return payload;

        default:
            console.log('Default state....');
            return state;
    }
}