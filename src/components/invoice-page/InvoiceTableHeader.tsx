import { Grid, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import { useColors } from '@/library';

type InvoiceTableHeaderProps = GridProps & {
	basic: any;
	css: any;
};
const InvoiceTableHeader: FC<InvoiceTableHeaderProps> = ({
	basic,
	css,
	...props
}) => {
	const colors = useColors();
	return (
		<Grid
			gridTemplateColumns='2fr 1fr 1fr'
			borderBottom={`1px dashed ${colors?.borderColor}`}
			borderTop={`1px dashed ${colors?.borderColor}`}
			py={4}
			{...props}
		>
			<TextNormal
				basic={basic}
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
				fontWeight='700'
			>
				Item
			</TextNormal>
			<TextNormal
				basic={basic}
				fontSize={{ base: '.875rem', lg: '1.1rem' }}
				fontWeight='700'
			>
				qty
			</TextNormal>
			<TextNormal
				basic={basic}
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
