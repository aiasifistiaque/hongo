import { TextNormal, Icon } from '@/components';
import { useColors, useContent } from '@/hooks';
import { Box, BoxProps, Flex } from '@chakra-ui/react';

import React, { FC } from 'react';

type ContactProps = BoxProps & {
	data?: {
		label: string;
		address: string;
		phone: string;
		mail: string;
	};
};

const Contact: FC<ContactProps> = ({ ...props }) => {
	const colors = useColors();
	const content: any = useContent();

	return (
		<Box
			color={colors?.footerFg}
			{...props}>
			<TextNormal
				mb='1rem'
				fontWeight='600'
				fontSize='2rem'
				color={colors?.footerFg}>
				Contact Us
			</TextNormal>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={colors?.footerFg}
					size={16}
					name='map'
				/>

				<TextNormal color={colors?.footerFg}>{content?.data?.shop?.address}</TextNormal>
			</Flex>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={colors?.footerFg}
					size={16}
					name='phone'
				/>
				<TextNormal color={colors?.footerFg}>{content?.basic?.phone}</TextNormal>
			</Flex>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={colors?.footerFg}
					size={16}
					name='envelope'
				/>
				<TextNormal color={colors?.footerFg}>{content?.basic?.email}</TextNormal>
			</Flex>
		</Box>
	);
};

export default Contact;
