import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';
import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

type SummaryItemProps = FlexProps & {
	text: string;
	value: number;
};
const SummaryItem: FC<SummaryItemProps> = ({ text, value, ...props }) => {
	return (
		<Flex justifyContent='space-between' {...props}>
			<TextNormal fontWeight='700' fontSize={{ base: '.875rem', lg: '1.1rem' }}>
				{text}
			</TextNormal>
			<TextNormal
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
				fontWeight='700'
				textAlign='right'
			>{`${currency?.symbol} ${value?.toLocaleString()}`}</TextNormal>
		</Flex>
	);
};

export default SummaryItem;
