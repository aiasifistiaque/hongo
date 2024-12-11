import { TextNormal } from '@/components/utils';
import { AccordionButton, AccordionIcon, AccordionPanel, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type DescriptionProps = TextProps & {
	description: {
		label: string;
		value: string;
	};
};

const Description: FC<DescriptionProps> = ({ description }) => {
	return (
		<>
			<AccordionButton
				py='1rem'
				px={0}
				_hover={{ backgroundColor: 'transparent' }}>
				<TextNormal
					fontWeight='600'
					flex='1'
					textAlign='left'>
					{description?.label}
				</TextNormal>
				<AccordionIcon />
			</AccordionButton>

			<AccordionPanel
				px={0}
				pb={4}>
				{description?.value}
			</AccordionPanel>
		</>
	);
};

export default Description;
