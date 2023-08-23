import { createSlice } from '@reduxjs/toolkit';

const initialState = { dateDebut: '', dateFin: '' };
export const RegisterEventReducers = createSlice({
    name: 'reducerE',
    initialState,
    reducers : {
        setDateDebut  : (state , action) =>{
            state.dateDebut = action.payload
        },
        setDateFin : (state , action) =>{
            state.dateFin = action.payload
        }
    }

})
export const {setDateDebut , setDateFin} = RegisterEventReducers.actions
export default RegisterEventReducers.reducer