import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { padding } from '@/lib/config/constants';
import { useColors } from '@/hooks';

type SectionPaddingProps = BoxProps & {
	children: ReactNode;
};

const SectionPadding: FC<SectionPaddingProps> = ({ children, ...props }) => {
	const colors = useColors();
	return (
		<Box
			bg={colors?.bg}
			w='full'
			h='auto'
			px={{ base: padding.layoutPadding_X_Mobile, lg: padding.layoutPadding_X }}
			{...props}
		>
			{children}
		</Box>
	);
};

export default SectionPadding;
