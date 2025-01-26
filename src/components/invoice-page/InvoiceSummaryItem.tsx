import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';
import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

type InvoiceSummaryItemProps = FlexProps & {
	text: string;
	value: number;
	basic: any;
	css: any;
};
const InvoiceSummaryItem: FC<InvoiceSummaryItemProps> = ({
	text,
	value,
	basic,
	css,
	...props
}) => {
	return (
		<Flex justifyContent='space-between' {...props}>
			<TextNormal
				basic={basic}
				fontWeight='700'
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
			>
				{text}
			</TextNormal>
			<TextNormal
				basic={basic}
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
				fontWeight='700'
				textAlign='right'
			>{`${currency?.symbol} ${value?.toLocaleString()}`}</TextNormal>
		</Flex>
	);
};

export default InvoiceSummaryItem;
