import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../Services/apiGeocoding.js';

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export const fetchAddress = createAsyncThunk(
    'user/getAddress',
    async function () {
        // 1) We get the user's geolocation position
        const positionObject = await getPosition();
        const position = {
            latitude: positionObject.coords.latitude,
            longitude: positionObject.coords.longitude,
        };

        // 2) Then we use a reverse geocoding API to get a description of the user's address,
        // so we can display it the order form, so that the user can correct it if wrong
        const addressObject = await getAddress(position);
        const governmentName =
            addressObject.localityInfo.administrative.find(
                (item) => item.adminLevel === 4,
            )?.name ?? '';

        const address = `${addressObject?.locality}, ${governmentName} ${addressObject?.city} ${addressObject?.postcode}, ${addressObject?.countryName}`;
        // 3) Then we return an object with the data that we are interested in
        return { position, address };
    },
);

const initialState = {
    username: '',
    status: 'idle',
    error: '',
    position: {},
    address: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload;
        },
        clearName(state) {
            state.username = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.status = 'idle';
                state.address = action.payload.address;
                state.position = action.payload.position;
            })
            .addCase(fetchAddress.rejected, (state) => {
                state.status = 'error';
                state.error =
                    'There was a problem getting your address. Make sure to fill this field!';
            });
    },
});

export const { updateName, clearName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state) => state.user.username;
