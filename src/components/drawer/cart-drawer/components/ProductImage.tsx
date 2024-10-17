import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductImageProps = FlexProps & {
	imgSrc: string;
};

const ProductImage: FC<ProductImageProps> = ({ imgSrc, ...props }) => {
	return (
		<Flex mr='8px' w='100px' h='100px' {...props}>
			<Image
				w='full'
				h='full'
				objectFit='cover'
				src={imgSrc}
				alt='Product Image'
			/>
		</Flex>
	);
};

export default ProductImage;
