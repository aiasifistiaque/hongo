import { Icon } from '@/components/icon';
import { TextNormal } from '@/components';
import { Box, Center, Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type ProfileLinksProps = FlexProps & {
	css?: any;
	basic: any;
	item: any;
	slug: string;
	content: any;
};

const ProfileLinks: FC<ProfileLinksProps> = ({
	css,
	basic,
	item,
	content,
	slug,
	...props
}) => {
	const isActive = slug == item?.slug;

	const headerCss = content?.header;
	return (
		<Link href={`/dashboard/${item?.slug}`}>
			<Container css={css} item={item} {...props}>
				<TextNormal _hover={{ color: headerCss?.bgColor }} basic={basic}>
					{item?.label}
				</TextNormal>
			</Container>
		</Link>
	);
};

export default ProfileLinks;
const Container = ({
	children,
	item,
	css,
	...props
}: FlexProps & { children: ReactNode; item: any; css: any }) => (
	<Flex
		py='.5rem'
		px='.5rem'
		mb='6px'
		alignItems='center'
		cursor='pointer'
		{...props}
	>
		{children}
	</Flex>
);
