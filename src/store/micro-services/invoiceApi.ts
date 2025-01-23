/* eslint-disable @typescript-eslint/no-explicit-any */
import mainApi from './microServiceMainApi';

export const invoiceApi = mainApi.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		downloadInvoice: builder.mutation({
			query: ({ path, body }: { path: string; body: any }) => ({
				url: `invoice/${path}`,
				method: 'POST',
				body,
				responseHandler: (response: any) => response.blob(),
			}),
			onQueryStarted: async (arg, { queryFulfilled }) => {
				try {
					const result = await queryFulfilled;
					const url = window.URL.createObjectURL(result.data);
					const link = document.createElement('a');
					link.href = url;
					const date = new Date();

					const timestamp = date.toISOString().replace(/[:.]/g, '-');
					link.setAttribute('download', `invoice_${timestamp}.pdf`);

					document.body.appendChild(link);
					link.click();
					link.remove();
				} catch (error) {
					console.log('Error downloading PDF:', error);
				}
			},
			invalidatesTags: ['download'],
		}),
		sendInvoice: builder.mutation({
			query: ({ body, path }) => ({
				url: `invoice/${path}`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['sendinvoice'], // Invalidate cache for this tag
		}),
	}),
});

export const { useDownloadInvoiceMutation, useSendInvoiceMutation } =
	invoiceApi;
