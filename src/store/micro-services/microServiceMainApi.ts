import { URL_INVOICE } from '../constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tags = ['brand', 'download', 'sendinvoice'];

// src/store/types.ts
export interface AuthState {
	token: string | null;
}

export interface RootState {
	auth: AuthState;
	// other slices of state
}

export const microServiceMainApi = createApi({
	reducerPath: 'microServiceMainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL_INVOICE.api}`,
		prepareHeaders: (headers, { getState }) => {
			const state = getState() as RootState;

			const token = state.auth?.token;
			if (token) {
				headers.set('authorization', token);
			}
		},
	}),
	tagTypes: tags,
	endpoints: () => ({}),
});

export default microServiceMainApi;
