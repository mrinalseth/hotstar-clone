import createDataContext from "./createDataContext";
// import {} from 

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signin':
            return {
                token: action.payload,
                errorMessage: ''
            }
        case 'signout':
            return {...state, token:null, errorMessage: ''}
    }
    return state
}

const signin = (dispatch) => {
    return async(name, email, photo) => {
        try {
            await localStorage.setItem('token',JSON.stringify({name,email,photo}))
            dispatch({
                type: 'signin',
                payload: {name, email, photo}
            })
        }catch(err) {

        }
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await localStorage.getItem('token')
        if(token) {
            dispatch({
                type: 'signin',
                payload: JSON.parse(token)
            })
        }else{
            console.log('local signin failed')
        }
    }
}

const logout = (dispatch) => {
    return async () => {
        await localStorage.removeItem('token')
        dispatch({
            type: 'signout',
            payload: null
        })
    }
}


export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signin,
        tryLocalSignin,
        logout
    },
    {token: null, errorMessage: ''}
)