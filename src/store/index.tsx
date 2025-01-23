import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice } from './slices/authSlice';
import { TOKEN_NAME } from './constants';
import mainApi from './services/mainApi';
import { cartSlice } from './slices/cartSlice';
import { tableSlice } from './slices/tableSlice';
import guestMainApi from './checkout-as-guest-api/guestMainApi';
import microServiceMainApi from './micro-services/microServiceMainApi';

// import { routeSlice, tableSlice, cartSlice, authSlice } from '@/components/library/store';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		// route: routeSlice.reducer,
		table: tableSlice.reducer,
		cart: cartSlice.reducer,
		[mainApi.reducerPath]: mainApi.reducer,
		[guestMainApi.reducerPath]: guestMainApi.reducer,
		[microServiceMainApi.reducerPath]: microServiceMainApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(mainApi.middleware)
			.concat(guestMainApi.middleware)
			.concat(microServiceMainApi.middleware),
});

store.subscribe(() => {
	const state = store.getState();
	if (typeof window !== 'undefined') {
		if (state.auth.token) {
			localStorage.setItem(TOKEN_NAME, state.auth.token);
		} else {
			localStorage.removeItem(TOKEN_NAME);
		}
	}
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
