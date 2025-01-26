import { TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';
import { Flex, FlexProps, Skeleton } from '@chakra-ui/react';
import { FC } from 'react';

type SummaryItemProps = FlexProps & {
	text: string;
	value: number;
	basic: any;
	css: any;
	isLoading: any;
};
const SummaryItem: FC<SummaryItemProps> = ({
	text,
	value,
	basic,
	css,
	isLoading,
	...props
}) => {
	return (
		<Flex justifyContent='space-between' mb={1} {...props}>
			<TextNormal
				basic={basic}
				css={css}
				fontWeight={css?.summaryWeight || 600}
				fontSize={{
					base: `${css?.summarySizeBase}px`,
					lg: `${css?.summarySizeBg || 16}px`,
				}}
				color={css?.summaryColor}
			>
				{text}
			</TextNormal>
			{isLoading ? (
				<Skeleton w='100px' h='20px' />
			) : (
				<TextNormal
					basic={basic}
					css={css}
					fontWeight={css?.summaryWeight || 600}
					fontSize={{
						base: `${css?.summarySizeBase}px`,
						lg: `${css?.summarySizeBg || 18}px`,
					}}
					color={css?.summaryColor}
					textAlign='right'
				>{`${currency?.symbol} ${value?.toLocaleString()}`}</TextNormal>
			)}
		</Flex>
	);
};

export default SummaryItem;
