import { Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';

type InvoiceTableHeaderProps = GridProps & {};
const InvoiceTableHeader: FC<InvoiceTableHeaderProps> = ({ ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Grid
			gridTemplateColumns='2fr 1fr 1fr'
			borderBottom={`1px dashed ${colors?.borderColor}`}
			borderTop={`1px dashed ${colors?.borderColor}`}
			py={4}
			{...props}
		>
			<TextNormal fontSize={{ base: '.875rem', lg: '1.1rem' }} fontWeight='700'>
				Item
			</TextNormal>
			<TextNormal fontSize={{ base: '.875rem', lg: '1.1rem' }} fontWeight='700'>
				qty
			</TextNormal>
			<TextNormal
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
				fontWeight='700'
				textAlign='right'
			>
				Total
			</TextNormal>
		</Grid>
	);
};

export default InvoiceTableHeader;
