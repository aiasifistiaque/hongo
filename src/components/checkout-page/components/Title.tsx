import { TextNormal } from '@/components';
import { useColors } from '@/library';
import { BoxProps, Grid, GridProps, TextProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type TitleProps = TextProps & {
	basic: any;
	css: any;
	children: any;
};

const Title: FC<TitleProps> = ({ basic, css, children, ...props }) => {
	return (
		<TextNormal
			basic={basic}
			fontWeight={css?.headingWeight || 600}
			fontSize={{
				base: `${css?.headingSizeBase}px`,
				lg: `${css?.headingSizeBg || 24}px`,
			}}
			color={css?.fgColor}
			mb='1rem'
		>
			{children}
		</TextNormal>
	);
};

export default Title;

export const AddressTitle = ({
	children,
	basic,
	css,
	...props
}: TextProps & { children: any; basic: any; css: any }) => (
	<TextNormal
		basic={basic}
		fontWeight={css?.cardTitleWeight || 600}
		fontSize={{
			base: `${css?.cartTitleSizeBase}px`,
			lg: `${css?.cartTitleSizeBg || 20}px`,
		}}
		color={css?.cardFg}
	>
		{children}
	</TextNormal>
);

export const CheckoutGridContainer = ({
	children,
	basic,
	css,
	...props
}: GridProps & { children: ReactNode; basic: any; css: any }) => {
	const colors = useColors();

	return (
		<Grid
			gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
			gap={4}
			bg={css?.cardBg || '#fff'}
			color={css?.cardFg}
			px='1rem'
			py='1rem'
			borderRadius='4px'
			{...props}
		>
			{children}
		</Grid>
	);
};
