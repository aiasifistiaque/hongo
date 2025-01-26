import { AlignCenter, TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';
import {
	Flex,
	FlexProps,
	Grid,
	GridProps,
	Image,
	Skeleton,
	TextProps,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type CheckoutTableRowProps = GridProps & {
	name: string;
	unitPrice: number;
	qty: number;
	totalPrice: number;
	image: string;
	basic: any;
	css: any;
	isLoading?: boolean;
};
const CheckoutTableRow: FC<CheckoutTableRowProps> = ({
	name,
	unitPrice,
	qty,
	totalPrice,
	image,
	basic,
	css,
	isLoading,
	...props
}) => {
	return (
		<Grid gridTemplateColumns='2fr 1fr 1fr' py='1rem' {...props}>
			<AlignCenter w='full'>
				<ImageWrapper basic={basic} css={css} image={image} />
				<Name basic={basic} css={css}>
					{name}
				</Name>
			</AlignCenter>
			<AlignCenter>
				<UnitPrice basic={basic} css={css} unitPrice={unitPrice} qty={qty} />
			</AlignCenter>
			<AlignCenter w='full' justify='flex-end'>
				<TotalPrice basic={basic} css={css}>
					{totalPrice}
				</TotalPrice>
			</AlignCenter>
		</Grid>
	);
};

export default CheckoutTableRow;

const Name = ({
	children,
	basic,
	css,
	...props
}: TextProps & { children: any; basic: any; css: any }) => (
	<TextNormal
		basic={basic}
		css={css}
		fontWeight={css?.nameWeight || 600}
		fontSize={{
			base: `${css?.nameSizeBase || 12}px`,
			lg: `${css?.nameSizeBg || 16}px`,
		}}
		color={css?.nameColor}
		pr={2}
		{...props}
	>
		{children}
	</TextNormal>
);

const UnitPrice = ({
	unitPrice,
	qty,
	basic,
	css,
	...props
}: TextProps & {
	basic: any;
	css: any;
	unitPrice: any;
	qty: any;
}) => (
	<TextNormal
		basic={basic}
		css={css}
		fontWeight={css?.qtyWeight || 400}
		fontSize={{
			base: `${css?.qtySizeBase || 12}px`,
			lg: `${css?.qtySizeBg || 14}px`,
		}}
		color={css?.qtyColor}
		{...props}
	>{`${currency?.symbol} ${unitPrice?.toLocaleString()} x ${qty}`}</TextNormal>
);

const TotalPrice = ({
	children,
	basic,
	css,
	...props
}: TextProps & {
	basic: any;
	css: any;
	children: any;
}) => (
	<TextNormal
		basic={basic}
		css={css}
		fontWeight={css?.totalWeight || 400}
		fontSize={{
			base: `${css?.totalSizeBase || 12}px`,
			lg: `${css?.totalSizeBg || 14}px`,
		}}
		color={css?.totalColor}
		textAlign='right'
		{...props}
	>{`${currency?.symbol} ${children?.toLocaleString()}`}</TextNormal>
);

const ImageWrapper = ({
	image,
	css,
	...props
}: FlexProps & {
	basic: any;
	css: any;
	image: string;
}) => (
	<Flex
		w={{ base: '54px', lg: '64px' }}
		h={{ base: '54px', lg: '64px' }}
		minW={{ base: '54px', lg: '64px' }}
		minH={{ base: '54px', lg: '64px' }}
		mr={{ base: 2, lg: 4 }}
		{...props}
	>
		<Image
			src={image || '/product/placeholderImage.jpg'}
			w='full'
			h='full'
			objectFit='cover'
			alt='Product Image'
		/>
	</Flex>
);
