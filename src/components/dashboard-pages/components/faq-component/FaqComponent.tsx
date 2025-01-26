import { AccordionItemProps, Box, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';
import { TextNormal } from '@/components';

type FaqComponentProps = FlexProps & {
	basic: any;
	css: any;
	faqData: any;
};

const FaqComponent: FC<FaqComponentProps> = ({
	basic,
	css,
	faqData,
	...props
}) => {
	return (
		<Accordion allowToggle>
			{faqData?.map((item: any, i: number) => (
				<FaqItem
					key={i}
					basic={basic}
					css={css}
					title={item?.title}
					value={item?.value}
				/>
			))}
		</Accordion>
	);
};
export default FaqComponent;

const FaqItem = ({
	basic,
	css,
	title,
	value,
	...props
}: AccordionItemProps & { title: any; value: any; basic: any; css: any }) => (
	<AccordionItem {...props}>
		<h2>
			<AccordionButton>
				<Box py='8px' as='span' flex='1' textAlign='left'>
					<TextNormal
						color={css?.faqTitleColor || '#292D32'}
						fontSize={{
							base: `${css?.faqTitleSizeBase || 16}px`,
							lg: `${css?.faqTitleSizeBg || 18}px`,
						}}
						fontWeight={css?.faqTitleWeight || 600}
						basic={basic}
						css={css}
					>
						{title}
					</TextNormal>
				</Box>
				<AccordionIcon />
			</AccordionButton>
		</h2>
		<AccordionPanel pb={4}>
			<TextNormal
				color={css?.faqSubTitleColor || '#535353'}
				fontSize={{
					base: `${css?.faqSubTitleSizeBase || 114}px`,
					lg: `${css?.faqSubTitleSizeBg || 16}px`,
				}}
				fontWeight={css?.faqSubTitleWeight || 400}
				basic={basic}
			>
				{value}
			</TextNormal>
		</AccordionPanel>
	</AccordionItem>
);
