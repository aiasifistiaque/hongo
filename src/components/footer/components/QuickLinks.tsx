import { TextNormal, Column } from '@/components';
import { useColors, useContent, useFont } from '@/hooks';
import { Box, BoxProps } from '@chakra-ui/react';
import Link from 'next/link';

import React, { FC } from 'react';

type QuickLinksProps = BoxProps & {
	data: {
		label: string;
		links: { link: string; name: string }[];
	};
};

const QuickLinks: FC<QuickLinksProps> = ({ data, ...props }) => {
	const colors = useColors();
	const font = useFont();
	const { content, basic } = useContent();
	const fgColor = content?.footer?.fgColor;
	return (
		<Box
			color={fgColor}
			{...props}>
			<TextNormal
				mb='1rem'
				fontWeight='600'
				fontSize='2rem'
				fontFamily={font?.primaryFont}
				color={fgColor}>
				{data?.label}
			</TextNormal>
			<Column gap={3}>
				{data?.links?.map((item, i) => (
					<Link
						key={i}
						href={item?.link}>
						<TextNormal
							_hover={{ textDecoration: 'underline' }}
							color={fgColor}
							display='inline-block'>
							{item?.name}
						</TextNormal>
					</Link>
				))}
			</Column>
		</Box>
	);
};

export default QuickLinks;
