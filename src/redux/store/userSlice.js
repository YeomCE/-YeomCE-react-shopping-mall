import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name: 'user',
    initialState: {name : 'kim', age : 20},
    reducer:{
        changeName(state){
            return 'john' + state
        }
    }
})

export let {changeName} = user.actions

export default user