/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import { useColors } from '@/library';
import useCustomStyle from '@/hooks/useCustomStyle';

type CustomerItemProps = FlexProps & {
	name: string;
	value: string;
	basic: any;
	css: any;
};

const CustomerItem: FC<CustomerItemProps> = ({ name, value, basic, css }) => {
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
				fontWeight='500'
				fontSize='.875rem'
				color={'#000'}
			>
				{value}
			</TextNormal>
		</Flex>
	);
};

export default CustomerItem;
