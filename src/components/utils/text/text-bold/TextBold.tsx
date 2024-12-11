'use client';
import { useColors, useFont } from '@/hooks';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextBoldProps = TextProps & {
	children?: string;
};

const TextBold: FC<TextBoldProps> = ({ children, ...props }) => {
	const colors = useColors();
	const fonts = useFont();

	return (
		<Text
			fontFamily={fonts?.primaryFont}
			fontSize='1rem'
			fontWeight='600'
			color={colors?.primaryText}
			{...props}>
			{children}
		</Text>
	);
};

export default TextBold;
