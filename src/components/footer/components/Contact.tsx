import { TextNormal, Icon } from '@/components';
import { useColors, useContent, useFont } from '@/hooks';
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
	const { content, basic }: any = useContent();
	const font = useFont();
	const fgColor = content?.footer?.fgColor;

	return (
		<Box
			color={fgColor}
			{...props}>
			<TextNormal
				mb='1rem'
				fontWeight='600'
				fontSize='2rem'
				fontFamily={font?.primaryFont}
				color={fgColor}>
				Contact Us
			</TextNormal>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={fgColor}
					size={16}
					name='map'
				/>

				<TextNormal color={fgColor}>{basic?.address}</TextNormal>
			</Flex>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={fgColor}
					size={16}
					name='phone'
				/>
				<TextNormal color={fgColor}>{basic?.phone}</TextNormal>
			</Flex>
			<Flex
				mb={3}
				alignItems='center'
				gap={2}>
				<Icon
					color={fgColor}
					size={16}
					name='envelope'
				/>
				<TextNormal color={fgColor}>{basic?.email}</TextNormal>
			</Flex>
		</Box>
	);
};

export default Contact;
