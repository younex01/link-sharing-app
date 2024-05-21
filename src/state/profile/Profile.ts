import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Profile{
    first_name: string;
    last_name:string;
    email:string;
}

const initialState:Profile = {
    first_name : '',
    last_name: '',
    email: ''
}

const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action:PayloadAction<Profile>) => {
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
        },
    },
})

export const {setProfile} = ProfileSlice.actions;

export default ProfileSlice.reducer;