import React, { FC } from 'react';

import { Flex, Image } from '@chakra-ui/react';
import { TextBold, TextNormal } from '@/components';
import { useFont } from '@/hooks';

type ServiceCartProps = {
	data: {
		image: string;
		title: string;
		description: string;
	};
};

const ServiceCart: FC<ServiceCartProps> = ({ data }) => {
	const font = useFont();
	return (
		<Flex
			w='full'
			h='full'
			alignItems='center'
			p={4}
			gap={3}>
			<Flex
				w='100px'
				h='100px'>
				<Image
					w='full'
					h='full'
					objectFit='contain'
					src={data?.image}
					alt={data?.title}
				/>
			</Flex>
			<Flex flexDir='column'>
				<TextBold
					fontSize='1.25rem'
					fontFamily={font?.primaryFont}>
					{data?.title}
				</TextBold>
				<TextNormal fontSize='1rem'>{data?.description}</TextNormal>
			</Flex>
		</Flex>
	);
};

export default ServiceCart;
