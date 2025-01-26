import { TextNormal } from '@/components';
import { TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type FormInfoTextProps = TextProps & {
	css: any;
	basic: any;
	children: any;
};

const FormInfoText: FC<FormInfoTextProps> = ({
	css,
	children,
	basic,
	...props
}) => {
	return (
		<TextNormal
			fontSize={`${css?.secondaryTextSize}px`}
			color={css?.secondaryTextColor || '#666666'}
			textAlign='center'
			{...props}
		>
			{children}
		</TextNormal>
	);
};

export default FormInfoText;
