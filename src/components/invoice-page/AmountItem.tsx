/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';
import { useColors } from '@/library';
import useCustomStyle from '@/hooks/useCustomStyle';

type AmountItemProps = FlexProps & {
	name: string;
	value: string;
	basic: any;
	css: any;
};

const AmountItem: FC<AmountItemProps> = ({ name, value, basic, css }) => {
	const { colors } = useCustomStyle();

	return (
		<Flex w='full' py='.4rem'>
			<TextNormal
				basic={basic}
				fontWeight='700'
				fontSize='.875rem'
				color={colors?.black}
				minW='140px'
			>
				{name}
			</TextNormal>
			<TextNormal
				basic={basic}
				fontSize='.875rem'
				fontWeight='700'
				textAlign='right'
			>{`${currency?.symbol} ${value?.toLocaleString()}`}</TextNormal>
		</Flex>
	);
};

export default AmountItem;
