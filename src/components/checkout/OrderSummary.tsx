/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
	Box,
	Flex,
	GridItem,
	GridItemProps,
	Radio,
	RadioGroup,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import {
	CheckoutTableHeader,
	CheckoutTableSummary,
	TextNormal,
	CheckoutTableRow,
	CouponCode,
	SummaryItem,
	PaymentMethod,
	CheckoutButton as OrderButton,
} from '@/components';
import { useAppSelector } from '@/hooks/useReduxHooks';
import { useColors } from '@/hooks';
import { useAuth } from '@/library';

type OrderSummaryProps = GridItemProps & {
	basic: any;
	css: any;
	isBtnDisabled?: boolean;
	addressData: any;
	handlePlaceOrder: () => void;
	handlePlaceOrderAsGuest: () => void;
	cardData: any;
	couponCode: any;
	applyCouponCode: () => void;
	handleCouponChange: (value: string) => void;
	cartLoading: boolean;
	handleLoading: boolean;
	couponCodeLoading: boolean;
};

const OrderSummary: FC<OrderSummaryProps> = ({
	basic,
	css,
	isBtnDisabled,
	addressData,
	handlePlaceOrder,
	handlePlaceOrderAsGuest,
	cardData,
	couponCode,
	applyCouponCode,
	handleCouponChange,
	cartLoading,
	handleLoading,
	couponCodeLoading,
	...props
}) => {
	const [discountCode, setDiscountCode] = useState('');
	const { cartItems, shipping, subTotal, discount, vat } = useAppSelector(
		state => state.cart
	);

	const handleDiscountChange = (value: string) => {
		setDiscountCode(value);
	};

	const colors = useColors();
	const dark = `1px dashed ${colors?.border}`;

	const { isLoggedIn } = useAuth();

	return (
		<GridItem {...props}>
			<TextNormal fontWeight='600' fontSize='1.2rem'>
				Order Summary
			</TextNormal>
			<CheckoutTableHeader />
			{cartItems?.map((item: any, i: number) => (
				<CheckoutTableRow
					key={i}
					name={item?.name}
					qty={item?.qty}
					totalPrice={item?.price * item?.qty}
					unitPrice={item?.price}
					image={item?.image}
				/>
			))}
			<CheckoutTableSummary
				shipping={cardData?.shipping}
				discount={cardData?.discount}
				subTotal={cardData?.subTotal}
				vat={cardData?.vat}
			/>
			<PaymentMethod basic={basic} css={css} />

			<CouponCode
				value={discountCode}
				applyCoupon={applyCouponCode}
				handleCouponChange={handleDiscountChange}
			/>
			<Box py={'1rem'} borderTop={dark} borderBottom={dark}>
				<SummaryItem text='Total' value={cardData?.total} />
			</Box>
			<Box>
				<OrderButton
					isLoading={handleLoading}
					size='sm'
					isDisabled={isBtnDisabled}
					onClick={isLoggedIn ? handlePlaceOrder : handlePlaceOrderAsGuest}
					w='full'
				>
					Apply
				</OrderButton>
			</Box>
		</GridItem>
	);
};

export default OrderSummary;
