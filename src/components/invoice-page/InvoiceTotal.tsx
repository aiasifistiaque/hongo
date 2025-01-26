import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';

type InvoiceTotalProps = FlexProps & {
	total: number;
	basic: any;
	css: any;
};
const InvoiceTotal: FC<InvoiceTotalProps> = ({
	total,
	basic,
	css,
	...props
}) => {
	return (
		<Flex justifyContent='space-between' pt='1rem' {...props}>
			<TextNormal
				basic={basic}
				fontWeight='700'
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
			>
				Total
			</TextNormal>
			<TextNormal
				basic={basic}
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
				fontWeight='700'
				textAlign='right'
			>{`${currency?.symbol} ${total?.toLocaleString()}`}</TextNormal>
		</Flex>
	);
};

export default InvoiceTotal;
