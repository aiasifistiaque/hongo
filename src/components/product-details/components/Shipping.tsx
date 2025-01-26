import { TextNormal } from '@/components/utils';
import {
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
	ListItem,
	TextProps,
	UnorderedList,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type Shipping = TextProps & {
	shipping: {
		label: string;
		value: string;
		lists: string[];
	};
};

const Shipping: FC<Shipping> = ({ shipping }) => {
	return (
		<>
			<AccordionButton
				py='1rem'
				px={0}
				_hover={{ backgroundColor: 'transparent' }}
			>
				<TextNormal fontWeight='600' flex='1' textAlign='left'>
					{shipping?.label}
				</TextNormal>
				<AccordionIcon />
			</AccordionButton>

			<AccordionPanel px={0} pb={4}>
				{shipping?.value}
				<Box py='2rem'>
					<UnorderedList px='2px'>
						{shipping?.lists?.map((item, i) => (
							<ListItem listStyleType='disc' key={i}>
								{item}
							</ListItem>
						))}
					</UnorderedList>
				</Box>
			</AccordionPanel>
		</>
	);
};

export default Shipping;
