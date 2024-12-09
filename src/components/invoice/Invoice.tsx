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
};

const Invoice: FC<InvoiceProps> = ({ data }) => {
	return (
		<InvoiceContainer>
			<HomeButton />
			<InvoiceHeader id={data?._id} />
			<CustomerDetails data={data} />
			<InvoiceTableHeader />
			{data?.items.map((item: any, i: number) => (
				<InvoiceProductRow
					key={i}
					name={item?.name}
					qty={item?.qty}
					totalPrice={item?.totalPrice}
					unitPrice={item?.unitPrice}
					image={item?.image}
				/>
			))}
			<InvoiceSummary
				subTotal={data?.subTotal}
				vat={data?.vat}
				shipping={data?.shippingCharge}
				discount={data?.discount}
			/>

			<InvoiceTotal total={data?.total} />
		</InvoiceContainer>
	);
};

export default Invoice;
