/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { TextNormal } from '@/components';
import { useAppSelector, useColors } from '@/library';
import { GridItem, GridItemProps } from '@chakra-ui/react';
import { FC } from 'react';
import {
	CheckoutTableHeader,
	CheckoutTableRow,
	CheckoutTableSummary,
} from './index';

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
	const { cartItems } = useAppSelector(state => state.cart);
	console.log('CarrItems', cartItems);

	const colors = useColors();

	return (
		<GridItem
			bg={css?.cardBg || colors?.bg}
			color={css?.cardFg}
			px='1rem'
			py='1rem'
			borderRadius='4px'
			{...props}
		>
			<TextNormal
				basic={basic}
				fontWeight={css?.cardTitleWeight || 600}
				fontSize={{
					base: `${css?.cartTitleSizeBase}px`,
					lg: `${css?.cartTitleSizeBg || 20}px`,
				}}
				color={css?.cardFg}
			>
				Order Summary
			</TextNormal>
			<CheckoutTableHeader basic={basic} css={css} />
			{cartItems?.map((item: any, i: number) => (
				<CheckoutTableRow
					key={i}
					name={item?.name}
					qty={item?.qty}
					totalPrice={item?.price * item?.qty}
					unitPrice={item?.price}
					image={item?.image}
					basic={basic}
					css={css}
				/>
			))}

			<CheckoutTableSummary
				basic={basic}
				css={css}
				shipping={cardData?.shipping}
				discount={cardData?.discount}
				subTotal={cardData?.subTotal}
				vat={cardData?.vat}
				total={cardData?.total}
				isBtnDisabled={isBtnDisabled}
				addressData={addressData}
				handlePlaceOrder={handlePlaceOrder}
				handlePlaceOrderAsGuest={handlePlaceOrderAsGuest}
				couponCode={couponCode}
				applyCouponCode={applyCouponCode}
				handleCouponChange={handleCouponChange}
				cartLoading={cartLoading}
				handleLoading={handleLoading}
				couponCodeLoading={couponCodeLoading}
			/>
		</GridItem>
	);
};

export default OrderSummary;
