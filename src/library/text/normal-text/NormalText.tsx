'use client';
import { useColors, useFont } from '../../hooks';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type TextNormalProps = TextProps & {
	children?: React.ReactNode;
	clr?: 'primary' | 'secondary';
	font?: 'primary' | 'secondary';
};

const TextNormal: FC<TextNormalProps> = ({
	children,
	clr = 'primary',
	font = 'secondary',
	...props
}) => {
	const colors = useColors();
	const fonts = useFont();

	const fontFamily = font === 'primary' ? fonts.primaryFont : fonts.secondaryFont;
	const colorValue = clr === 'primary' ? colors.primaryText : colors.secondaryText;

	return (
		<Text
			fontFamily={fontFamily}
			fontSize='1rem'
			fontWeight='400'
			color={colorValue}
			{...props}>
			{children}
		</Text>
	);
};

export default TextNormal;
