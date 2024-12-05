import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import SummaryItem from './SummaryItem';
import useCustomStyle from '@/hooks/useCustomStyle';

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
	const { colors } = useCustomStyle();
	const dark = `1px dashed ${colors?.dark}`;
	return (
		<Box borderTop={dark} borderBottom={dark} py='1rem' {...props}>
			<SummaryItem text='Subtotal' value={subTotal} />
			<SummaryItem text='Vat (+)' value={vat} />
			<SummaryItem text='Shipping (+)' value={shipping} />
			<SummaryItem text='Discount (-)' value={discount} />
		</Box>
	);
};

export default CheckoutTableSummary;
