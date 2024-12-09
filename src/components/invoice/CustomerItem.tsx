/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';

type CustomerItemProps = FlexProps & {
	name: string;
	value: string;
};

const CustomerItem: FC<CustomerItemProps> = ({ name, value }) => {
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
			<TextNormal fontWeight='500' fontSize='.875rem' color={colors?.textColor}>
				{value}
			</TextNormal>
		</Flex>
	);
};

export default CustomerItem;
