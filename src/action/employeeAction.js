import axios from 'axios';

export const FETCH_EMPLOYEES = 'users:fetchEmployees';
export function fetchEmployees() {

    let url = 'http://localhost:8080/api/employees?page=1&size=10';

    console.log('Fetch Employees....');
   /* const request = axios.get(url,
    { headers: {
                        'Access-Control-Allow-Origin': '*',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    auth: {
                        username: 'admin',
                        password: 'admin123'
                    }
        }).then(function(response) {
        console.log('Authenticated');
    }).catch(function(error) {
        console.log('Error on Authentication');
    });*/

    const request = axios({
        method: 'get',
        url: 'http://localhost:8080/api/employees?page=1&size=10',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods' : '*',
            'Access-Control-Allow-Headers' : '*',
            'Access-Control-Allow-Credentials' : '*',
            'Access-Control-Max-Age' : '3600',
            'X-Requested-With': 'XMLHttpRequest'
        },
        withCredentials: true,
        crossOrigin:true,
        auth: {
            username: 'admin',
            password: 'admin123'
        },
    });

    request.then(({data}) => {
            console.log(data);
        }
    );
    return(dispatch)=> {
        console.log('Dispatch....');
        request.then(({data}) => {
            dispatch({ type: 'FETCH_EMPLOYEES', payload: data})
            }
        );
    };
}