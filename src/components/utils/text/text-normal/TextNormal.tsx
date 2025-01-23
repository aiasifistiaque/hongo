'use client';
import { useColors, useFont } from '@/hooks';

import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextNormalProps = TextProps & {
	children?: React.ReactNode;
	basic?: any;
};

const TextNormal: FC<TextNormalProps> = ({ children, basic, ...props }) => {
	const colors = useColors();
	const fonts = useFont();
	return (
		<Text
			fontFamily={fonts.secondaryFont}
			fontSize='1rem'
			fontWeight='400'
			color={colors?.primaryText}
			{...props}
		>
			{children}
		</Text>
	);
};

export default TextNormal;
