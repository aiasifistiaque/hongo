/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';
import useCustomStyle from '@/hooks/useCustomStyle';

type AmountItemProps = FlexProps & {
	name: string;
	value: string;
};

const AmountItem: FC<AmountItemProps> = ({ name, value }) => {
	const { colors } = useCustomStyle();

	return (
		<Flex w='full' py='.4rem'>
			<TextNormal
				fontWeight='700'
				fontSize='.875rem'
				color={colors?.dark}
				minW='140px'
			>
				{name}
			</TextNormal>
			<TextNormal fontSize='.875rem' fontWeight='700' textAlign='right'>{`${
				currency?.symbol
			} ${value?.toLocaleString()}`}</TextNormal>
		</Flex>
	);
};

export default AmountItem;
