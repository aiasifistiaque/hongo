import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type InvoiceContainerProps = BoxProps & {
	children: ReactNode;
};
const InvoiceContainer: FC<InvoiceContainerProps> = ({
	children,
	...props
}) => {
	return (
		<Box
			mt={4}
			maxW={{ base: 'full', md: '30rem', lg: '50rem' }}
			mx='auto'
			px='1rem'
			{...props}
		>
			{children}
		</Box>
	);
};

export default InvoiceContainer;
