/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { TextNormal, CheckoutButton as Button } from '@/components';
import { useColors } from '@/library';
import {
	useDownloadInvoiceMutation,
	useSendInvoiceMutation,
} from '@/store/micro-services/invoiceApi';
import { useCustomToast } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';

type InvoiceHeaderProps = BoxProps & {
	id: string;
	data: any;
	basic: any;
	css: any;
};

const InvoiceHeader: FC<InvoiceHeaderProps> = ({
	id,
	basic,
	data,
	css,
	...props
}) => {
	const { colors } = useCustomStyle();
	const [trigger, result] = useDownloadInvoiceMutation();
	const [sendMailTrigger, sendMailResult] = useSendInvoiceMutation();

	const handleDownLoadInvoice = () => {
		trigger({ body: data, path: 'download' });
	};

	useCustomToast({
		isError: result?.isError || sendMailResult?.isError,
		isSuccess: result?.isSuccess || sendMailResult?.isSuccess,
		error: result?.error || sendMailResult?.error,
		isLoading: result?.isLoading || sendMailResult?.isLoading,
		successText: 'Invoice has been download and send to your email!',
		successTitle: 'Success',
	});

	return (
		<Box borderBottom={`1px dashed ${colors?.borderColor}`} {...props}>
			<Flex justifyContent='space-between' alignItems='center'>
				<TextNormal
					basic={basic}
					fontSize={{ base: '1.4rem', lg: '2.2rem' }}
					fontWeight='700'
					color={colors?.black}
				>
					Order Details
				</TextNormal>
				<Button
					basic={basic}
					mb='0px'
					fontSize={{ base: '.775rem', lg: '1rem' }}
					p={{ base: '8px 12px', lg: '20px 24px' }}
					onClick={handleDownLoadInvoice}
					isLoading={result?.isLoading}
					w='auto'
				>
					Download Invoice
				</Button>
			</Flex>
			<TextNormal
				basic={basic}
				py='1rem'
				fontSize={{ base: '.875rem', lg: '1.25rem' }}
				fontWeight='700'
			>{`Invoice ID: ${id}`}</TextNormal>

			{/* <Toaster /> */}
		</Box>
	);
};

export default InvoiceHeader;
