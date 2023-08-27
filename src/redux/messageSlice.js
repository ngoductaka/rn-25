import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({

    name: "message",

    initialState: {
        message: "Initial message",
        listMessage: []

    },

    reducers: {
        // xử lý các action ()
        setMessage(state, action) { // state: old state, action // loại action (setMessage) kèm theo dữ liệu
            state.listMessage = action.payload
            // state.message = action.payload
        }

    }
})

// action 
export const { setMessage } = messageSlice.actions
// reducer
export default messageSlice.reducer;


// createSlice phần nhỏ của logic (đối tượng riêng biệt)
// app obj (dùng chung toàn app)
// {
//     message: {
        // message: "Initial message",
        // listMessage: [0,1 ...]
//         ...
//     }

// }