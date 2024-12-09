import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';

type InvoiceTotalProps = FlexProps & {
	total: number;
};
const InvoiceTotal: FC<InvoiceTotalProps> = ({ total, ...props }) => {
	return (
		<Flex justifyContent='space-between' pt='1rem' {...props}>
			<TextNormal fontWeight='700' fontSize={{ base: '.875rem', lg: '1.1rem' }}>
				Total
			</TextNormal>
			<TextNormal
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
				fontWeight='700'
				textAlign='right'
			>{`${currency?.symbol} ${total?.toLocaleString()}`}</TextNormal>
		</Flex>
	);
};

export default InvoiceTotal;
