import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Data";


const userSlice = createSlice({
    name: 'user',
    initialState:Data,
    reducers: {
        addUser:(state, action)=>{
            // console.log(action)
            state.push(action.payload);

        },
        updateUser:(state, action)=>{
            console.log(action.payload);
            const {id, name,email} = action.payload;
            console.log(action.payload);
            const updateUser = state.find(user => user.id == id)
            if(updateUser) {
                updateUser.name = name;
                updateUser.email = email;
            }

        },
        deleteUser:(state, action) => {
            const {id} = action.payload;
            const deleteUser= state.find(user => user.id == id);
            if(deleteUser){
                return state.filter(user => user.id != id)
            }
        }

    }

})

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;