import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import InvoiceSummaryItem from './InvoiceSummaryItem';
import { useColors } from '@/library';

type InvoiceSummaryProps = BoxProps & {
	subTotal: number;
	vat: number;
	shipping: number;
	discount: number;
	basic: any;
	css: any;
};
const InvoiceSummary: FC<InvoiceSummaryProps> = ({
	subTotal,
	vat,
	shipping,
	discount,
	basic,
	css,
	...props
}) => {
	const colors = useColors();
	return (
		<Box
			borderTop={`1px dashed ${colors?.borderColor}`}
			borderBottom={`1px dashed ${colors?.borderColor}`}
			py='1rem'
			{...props}
		>
			<InvoiceSummaryItem
				basic={basic}
				css={css}
				text='Subtotal'
				value={subTotal}
			/>
			<InvoiceSummaryItem basic={basic} css={css} text='Vat (+)' value={vat} />
			<InvoiceSummaryItem
				basic={basic}
				css={css}
				text='Shipping (+)'
				value={shipping}
			/>
			<InvoiceSummaryItem
				basic={basic}
				css={css}
				text='Discount (-)'
				value={discount}
			/>
		</Box>
	);
};

export default InvoiceSummary;
