/* eslint-disable @typescript-eslint/no-explicit-any */

import { TextNormal } from '@/components';
import { useColors } from '@/hooks';
import { currency } from '@/lib/config/constants';
import { Flex, FlexProps } from '@chakra-ui/react';

import React, { FC } from 'react';
type PriceProps = FlexProps & {
	price?: string | number;
	fontSize?: string;
	color?: string;
	fontWeight?: string;
};

const Price: FC<PriceProps> = ({ price, fontSize, color, fontWeight, ...props }) => {
	const colors = useColors();
	return (
		<Flex
			fontSize='3rem'
			justifyContent='center'
			gap={1}
			{...props}>
			<TextNormal
				fontSize={fontSize}
				color={colors?.primaryText}
				fontWeight={fontWeight}>
				BDT. {price}
			</TextNormal>
		</Flex>
	);
};

export default Price;
