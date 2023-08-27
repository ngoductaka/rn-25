import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const userSlices = createSlice({
    name: "user",
    initialState: {
        loading: false,
        errors: null,
        dataUser: []
    },
    reducers: {
        // xử lý các action ()
        getUser(state, action) { // state: old state, action // loại action (setMessage) kèm theo dữ liệu
            // state.listMessage = action.payload
            // state.message = action.payload
        },
        getUserSuccess(state, action) { // state
        },
        getUserFail(state, action) { // state
        },

    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.dataUser = action.payload
            state.loading = false
        })
        builder.addCase(fetchUsers.rejected, state => {
            state.loading = false
        })
    }
})

// action 
export const { getUser, getUserSuccess, getUserFail } = userSlices.actions;


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://reqres.in/api/users?delay=1');
    return (await response.json()).data
});


// reducer
export default userSlices.reducer;


// createSlice phần nhỏ của logic (đối tượng riêng biệt)
// app obj (dùng chung toàn app)
// {
//     message: {
        // message: "Initial message",
        // listMessage: [0,1 ...]
//         ...
//     }

// }