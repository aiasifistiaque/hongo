/* eslint-disable @typescript-eslint/no-explicit-any */

import { useColors } from '@/hooks';
import { BoxProps, Flex, Image } from '@chakra-ui/react';

import React, { FC } from 'react';
type CartHeaderProps = BoxProps & {
	imgSrc: string;
};

const CartHeader: FC<CartHeaderProps> = ({ imgSrc, ...props }) => {
	const colors = useColors();
	return (
		<Flex w='full' maxH='250px' overflow='hidden' {...props}>
			<Image
				w='full'
				h='full'
				maxH='250px'
				borderTopRadius={`${colors.cardRadius}px`}
				objectFit='cover'
				src={imgSrc}
				alt='Product Image'
				transition='.8s'
				_hover={{ transform: 'scale(1.1)' }}
			/>
		</Flex>
	);
};

export default CartHeader;
