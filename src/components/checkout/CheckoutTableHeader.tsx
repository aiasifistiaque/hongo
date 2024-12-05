import { Grid, GridProps, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { TextNormal } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';

const FONT_SIZE = { base: '.875rem', lg: '1.1rem' };

type CheckoutTableHeaderProps = GridProps & {};
const CheckoutTableHeader: FC<CheckoutTableHeaderProps> = ({ ...props }) => {
	return (
		<Container {...props}>
			<TableText>Item</TableText>
			<TextNormal>qty</TextNormal>
			<TableText textAlign='right'>Total</TableText>
		</Container>
	);
};

export default CheckoutTableHeader;

const TableText: React.FC<TextProps & { children: string }> = ({
	children,
	...props
}) => (
	<TextNormal fontWeight='700' fontSize={FONT_SIZE} {...props}>
		{children}
	</TextNormal>
);

const Container: React.FC<{ children: ReactNode }> = ({
	children,
	...props
}) => {
	const { colors } = useCustomStyle();
	const borderColor = `1px dashed ${colors?.dark}`;
	return (
		<Grid
			gridTemplateColumns='2fr 1fr 1fr'
			borderBottom={borderColor}
			py={4}
			{...props}
		>
			{children}
		</Grid>
	);
};
