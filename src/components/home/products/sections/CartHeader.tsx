/* eslint-disable @typescript-eslint/no-explicit-any */

import { BoxProps, Flex, Image } from '@chakra-ui/react';

import React, { FC } from 'react';
type CartHeaderProps = BoxProps & {
	imgSrc: string;
};

const CartHeader: FC<CartHeaderProps> = ({ imgSrc, ...props }) => {
	return (
		<Flex w='full' h='18rem' overflow='hidden' {...props}>
			<Image
				w='full'
				h='full'
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
