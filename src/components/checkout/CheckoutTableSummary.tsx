import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import SummaryItem from './SummaryItem';
import useCustomStyle from '@/hooks/useCustomStyle';
import { useColors } from '@/hooks';

type CheckoutTableSummaryProps = BoxProps & {
	subTotal: number;
	vat: number;
	shipping: number;
	discount: number;
};
const CheckoutTableSummary: FC<CheckoutTableSummaryProps> = ({
	subTotal,
	vat,
	shipping,
	discount,
	...props
}) => {
	const colors = useColors();
	const dark = `1px dashed ${colors?.border}`;
	return (
		<Box
			borderTop={dark}
			borderBottom={dark}
			py='1rem'
			{...props}>
			<SummaryItem
				text='Subtotal'
				value={subTotal}
			/>
			<SummaryItem
				text='Vat (+)'
				value={vat}
			/>
			<SummaryItem
				text='Shipping (+)'
				value={shipping}
			/>
			<SummaryItem
				text='Discount (-)'
				value={discount}
			/>
		</Box>
	);
};

export default CheckoutTableSummary;
