/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { TextNormal, IconButton } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';

type InvoiceHeaderProps = BoxProps & {
	id: string;
	// data: any;
};

const InvoiceHeader: FC<InvoiceHeaderProps> = ({ id,  ...props }) => {
	const { colors } = useCustomStyle();
	// const [trigger, result] = useDownloadInvoiceMutation();
	// const [sendMailTrigger] = useSendInvoiceMutation();

	// const handleDownLoadInvoice = () => {
	// 	trigger({ body: data, path: 'download' });
	// 	sendMailTrigger({ body: data, path: 'send-invoice' });

	// 	toaster.success({
	// 		title: 'Invoice has been download and send to your email!',
	// 	});
	// };

	return (
		<Box borderBottom={`1px dashed ${colors?.borderColor}`} {...props}>
			<Flex justifyContent='space-between' alignItems='center'>
				<TextNormal
					fontSize={{ base: '1.4rem', lg: '2.2rem' }}
					fontWeight='700'
					color={colors?.dark}
				>
					Order Details
				</TextNormal>
				<IconButton
					mb='0px'
					fontSize={{ base: '.775rem', lg: '1rem' }}
					p={{ base: '8px 12px', lg: '20px 24px' }}
					// onClick={handleDownLoadInvoice}
					// loading={result?.isLoading}
				>
					Download Invoice
				</IconButton>
			</Flex>
			<TextNormal
				py='1rem'
				fontSize={{ base: '.875rem', lg: '1.25rem' }}
				fontWeight='700'
			>{`Invoice ID: ${id}`}</TextNormal>

			{/* <Toaster /> */}
		</Box>
	);
};

export default InvoiceHeader;
