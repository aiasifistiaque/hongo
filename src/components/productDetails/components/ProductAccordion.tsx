/* eslint-disable @typescript-eslint/no-explicit-any */
import useCustomStyle from '@/hooks/useCustomStyle';
import { Accordion, AccordionItem, AccordionProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import Description from './Description';
import Shipping from './Shipping';
import Additional from './Additional';
import { useColors } from '@/hooks';

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
	const colors = useColors();
	return (
		<Accordion
			allowToggle
			{...props}>
			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.border}`}>
				<Description description={description} />
			</AccordionItem>

			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.border}`}>
				<Shipping shipping={shipping} />
			</AccordionItem>

			<AccordionItem
				border='none'
				borderBottom={`1px solid ${colors?.border}`}>
				<Additional additional={additionalInformation} />
			</AccordionItem>
		</Accordion>
	);
};

export default ProductAccordion;
