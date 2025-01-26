/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

import {
	CustomerDetails,
	HomeButton,
	InvoiceContainer,
	InvoiceHeader,
	InvoiceProductRow,
	InvoiceSummary,
	InvoiceTableHeader,
	InvoiceTotal,
} from './index';
// import BackButton from '@/components/single-product/BackButton';

type InvoiceProps = BoxProps & {
	data: any;
	basic: any;
	content: any;
};

const Invoice: FC<InvoiceProps> = ({ data, basic, content }) => {
	const css = content?.invoiceCss;
	return (
		<InvoiceContainer>
			<InvoiceHeader data={data} basic={basic} css={css} id={data?._id} />
			<CustomerDetails basic={basic} css={css} data={data} />
			<InvoiceTableHeader basic={basic} css={css} />
			{data?.items.map((item: any, i: number) => (
				<InvoiceProductRow
					key={i}
					name={item?.name}
					qty={item?.qty}
					totalPrice={item?.totalPrice}
					unitPrice={item?.unitPrice}
					image={item?.image}
					basic={basic}
					css={css}
				/>
			))}
			<InvoiceSummary
				subTotal={data?.subTotal}
				vat={data?.vat}
				shipping={data?.shippingCharge}
				discount={data?.discount}
				basic={basic}
				css={css}
			/>

			<InvoiceTotal basic={basic} css={css} total={data?.total} />
		</InvoiceContainer>
	);
};

export default Invoice;
