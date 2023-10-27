import {createSlice} from '@reduxjs/toolkit'
import {UsersData} from '../SampleData'


export const userSlice = createSlice({
    name: "users",

    // ? initialState is place where put all the value

    initialState: {value: UsersData},
    reducers : {

        // ! State is where we access current value of the state in the above values
        addUser : (state,action) => {
            // ! Logic for adding a user 
            state.value.push(action.payload)
        }, 
        deleteUser : (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateUser : (state,action) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            })
        }
    }
})

export const {addUser,deleteUser,updateUser} = userSlice.actions;
export default userSlice.reducer