import { TextNormal } from '@/components/utils';
import useCustomStyle from '@/hooks/useCustomStyle';
import {
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Center,
	TextProps,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type AdditionalProps = TextProps & {
	additional: {
		label: string;
		value: {
			key: string;
		};
	};
};

const Additional: FC<AdditionalProps> = ({ additional }) => {
	const { colors } = useCustomStyle();
	return (
		<>
			<AccordionButton
				py='1rem'
				px={0}
				_hover={{ backgroundColor: 'transparent' }}
			>
				<TextNormal fontWeight='600' flex='1' textAlign='left'>
					{additional?.label}
				</TextNormal>
				<AccordionIcon />
			</AccordionButton>

			<AccordionPanel px={0} pb={12}>
				{/* I want to show that in here */}
				{Object.entries(additional.value).map(([key, value], i) => (
					<Center
						key={i}
						p={4}
						backgroundColor={
							i % 2 === 0 ? 'transparent' : colors?.lightSecondary
						}
						justifyContent='space-between'
						borderBottom={`1px solid ${colors?.primary}`}
					>
						<TextNormal fontWeight='500'>{key}</TextNormal>
						<TextNormal>{value}</TextNormal>
					</Center>
				))}
			</AccordionPanel>
		</>
	);
};

export default Additional;
