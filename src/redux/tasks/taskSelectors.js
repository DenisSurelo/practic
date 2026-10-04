import {createSlice} from "@reduxjs/toolkit"
import {fetchTasks, addTask, deleteTask} from '../operations'


const handlePending = (state) => {
    state.isLoading = true
}

const handleRejected = (state,action) =>{
    state.isLoading = falsestate.error = action.payload

}

extraReducer: (builder) => {
    builder
    .addCase(fetchTasks.pending, handlePending)
    .addCase(fetchTasks.fulfilled, (state,action) => {
        state.isLoading=false
        state.error=null
        state.item = action.payload
    })
  .addCase(fetchTasks.rejected, handleRejected)

  .addCase(addTask.pending, handlePending)
  .addCase(addTask.fulfilled)

}