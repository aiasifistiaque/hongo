import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import InvoiceSummaryItem from './InvoiceSummaryItem';
import useCustomStyle from '@/hooks/useCustomStyle';

type InvoiceSummaryProps = BoxProps & {
	subTotal: number;
	vat: number;
	shipping: number;
	discount: number;
};
const InvoiceSummary: FC<InvoiceSummaryProps> = ({
	subTotal,
	vat,
	shipping,
	discount,
	...props
}) => {
	const { colors } = useCustomStyle();
	return (
		<Box
			borderTop={`1px dashed ${colors?.borderColor}`}
			borderBottom={`1px dashed ${colors?.borderColor}`}
			py='1rem'
			{...props}
		>
			<InvoiceSummaryItem text='Subtotal' value={subTotal} />
			<InvoiceSummaryItem text='Vat (+)' value={vat} />
			<InvoiceSummaryItem text='Shipping (+)' value={shipping} />
			<InvoiceSummaryItem text='Discount (-)' value={discount} />
		</Box>
	);
};

export default InvoiceSummary;
