import { CheckoutButton as OrderButton } from '@/components';
import { Box, BoxProps, Flex, Radio, RadioGroup } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { CouponCode, PaymentMethod } from '.';
import SummaryItem from './SummaryItem';
import { useAuth } from '@/library';

type CheckoutTableSummaryProps = BoxProps & {
	subTotal: number;
	total: number;
	vat: number;
	shipping: number;
	discount: number;
	basic: any;
	css: any;
	isBtnDisabled?: boolean;
	addressData: any;
	handlePlaceOrder: () => void;
	handlePlaceOrderAsGuest: () => void;

	couponCode: any;
	applyCouponCode: () => void;
	handleCouponChange: (value: string) => void;
	cartLoading: boolean;
	handleLoading: boolean;
	couponCodeLoading: boolean;
};
const CheckoutTableSummary: FC<CheckoutTableSummaryProps> = ({
	subTotal,
	total,
	vat,
	shipping,
	discount,
	basic,
	css,
	isBtnDisabled,
	addressData,
	handlePlaceOrder,
	handlePlaceOrderAsGuest,

	couponCode,
	applyCouponCode,
	handleCouponChange,
	cartLoading,
	handleLoading,
	couponCodeLoading,
	...props
}) => {
	const [value, setValue] = useState('cashOnDelivery');
	const { isLoggedIn } = useAuth();

	//   const colors = useColors();
	const dark = `1px dashed ${css?.border || '#000'}`;

	return (
		<Box pb='1rem'>
			<Box borderTop={dark} borderBottom={dark} py='1rem' {...props}>
				<SummaryItem
					isLoading={cartLoading}
					basic={basic}
					css={css}
					text='Subtotal'
					value={subTotal}
				/>
				<SummaryItem
					isLoading={cartLoading}
					basic={basic}
					css={css}
					text='Vat (+)'
					value={vat}
				/>
				<SummaryItem
					isLoading={cartLoading}
					basic={basic}
					css={css}
					text='Shipping (+)'
					value={shipping}
				/>
				<SummaryItem
					isLoading={cartLoading}
					basic={basic}
					css={css}
					text='Discount (-)'
					value={discount}
				/>
				<PaymentMethod basic={basic} css={css} />
				<CouponCode
					basic={basic}
					css={css}
					value={couponCode}
					applyCoupon={applyCouponCode}
					handleCouponChange={handleCouponChange}
					loading={couponCodeLoading}
				/>
			</Box>
			<SummaryItem
				isLoading={cartLoading}
				py='1rem'
				basic={basic}
				css={css}
				text='Total'
				value={total}
			/>

			<OrderButton
				w='full'
				bg={css?.btnPrimaryBg}
				color={css?.btnPrimaryFg}
				_hover={{
					bg: css?.btnPrimaryHoverBg,
					color: css?.btnPrimaryHoverFg,
				}}
				fontSize={`${css?.btnPrimarySize || 14}px`}
				fontWeight={css?.btnPrimaryWeight}
				basic={basic}
				css={css}
				isDisabled={isBtnDisabled}
				onClick={isLoggedIn ? handlePlaceOrder : handlePlaceOrderAsGuest}
				isLoading={handleLoading}
			>
				Confirm Order
			</OrderButton>
		</Box>
	);
};

export default CheckoutTableSummary;
