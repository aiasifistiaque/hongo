/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';
import { Accordion, AccordionItem, AccordionProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import Description from './Description';
import Shipping from './Shipping';
import Additional from './Additional';

type ProductAccordionProps = AccordionProps & {
	description: any;
	shipping: any;
	additionalInformation: any;
};

const ProductAccordion: FC<ProductAccordionProps> = ({
	description,
	shipping,
	additionalInformation,
	...props
}) => {
	const { colors } = useCustomStyle();
	return (
		<Accordion allowToggle {...props}>
			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<Description description={description} />
			</AccordionItem>

			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<Shipping shipping={shipping} />
			</AccordionItem>

			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.primary}`}
			>
				<Additional additional={additionalInformation} />
			</AccordionItem>
		</Accordion>
	);
};

export default ProductAccordion;
