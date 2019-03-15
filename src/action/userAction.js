export const UPDATE_USER = 'users:updateUser';
export const DELETE_USER = 'users:deleteUser';

export function updateUser(newUser) {
    return{
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function deleteUser(user){
    console.log('delete function is invoked..');
    return{
        type: DELETE_USER,
        payload: {
            user: user
        }
    }
}