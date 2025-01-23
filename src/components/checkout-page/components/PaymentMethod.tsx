import { Box, BoxProps, Flex, Radio, RadioGroup } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';

type PaymentMethodProps = BoxProps & {
	basic: any;
	css?: any;
};

const PaymentMethod: FC<PaymentMethodProps> = ({ basic, css }) => {
	return (
		<Box mb={4}>
			<TextNormal
				fontWeight={css?.summaryWeight || 600}
				basic={basic}
				css={css}
				fontSize={{
					base: `${css?.summarySizeBase}px`,
					lg: `${css?.summarySizeBg || 16}px`,
				}}
				color={css?.summaryColor}
			>
				Payment Method
			</TextNormal>
			<RadioGroup defaultValue='cashOnDelivery'>
				<Flex gap={4}>
					<Radio isDisabled value='card'>
						Card
					</Radio>
					<Radio isDisabled value='bkash'>
						Bkash
					</Radio>
					<Radio value='cashOnDelivery'>Cash On Delivery</Radio>
				</Flex>
			</RadioGroup>
		</Box>
	);
};

export default PaymentMethod;
