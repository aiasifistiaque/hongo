import React, { FC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

import useCustomFont from '@/hooks/useCustomFont';
type SearchDrawerTitleProps = TextProps & {
	children?: string;
};

const SearchDrawerTitle: FC<SearchDrawerTitleProps> = ({ children }) => {
	const { fonts } = useCustomFont();
	return (
		<Text
			fontFamily={fonts.marcellus}
			fontStyle='normal'
			textAlign='center'
			mb={8}
			fontSize={{ base: '1.5rem', md: '2.25rem' }}
			fontWeight='600'
		>
			{children}
		</Text>
	);
};

export default SearchDrawerTitle;
