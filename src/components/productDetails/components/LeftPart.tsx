import { CenterProps, Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type LeftPartProps = CenterProps & {
	imgSrc: string;
};

const LeftPart: FC<LeftPartProps> = ({ imgSrc, ...props }) => {
	return (
		<Flex
			w={{ base: 'auto', md: '30rem' }}
			h={{ base: 'auto', md: '34rem' }}
			mx={{ base: 'auto', xl: '0' }}
			{...props}
		>
			<Image
				src={imgSrc}
				w='full'
				h='full'
				objectFit='cover'
				alt='Product Image'
				borderRadius='.5rem'
			/>
		</Flex>
	);
};

export default LeftPart;
