'use client';
import { CartDrawer, Logo } from '@/components';
import { SearchDrawer } from '@/components/index';
import { HeaderZIndex, padding } from '@/lib/config/constants';
import {
	BoxProps,
	Flex,
	Grid,
	GridItem,
	useDisclosure,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import SearchInput from './header-components/SearchInput';
import SearchButton from './header-components/SearchButton';
import CartButton from './header-components/CartButton';
import Container from './header-components/Container';
import { useContent } from '@/hooks';

type HeaderProps = BoxProps & {};

const Header: FC<HeaderProps> = ({}) => {
	const { isOpen, onOpen: onSearchDrawerOpen, onClose } = useDisclosure();
	const {
		isOpen: cartOpen,
		onOpen: onCartDrawerOpen,
		onClose: onCartDeawerClose,
	} = useDisclosure();

	const { content, basic } = useContent();

	console.log('Content', content);

	return (
		<Wrapper>
			<GridWrapper>
				<GridItem>
					<Logo imgSrc={content?.header?.logo || ''} />
				</GridItem>
				<GridItem>
					<Flex justifyContent='flex-end' alignItems='center' h='full'>
						<SearchInput />
						<SearchButton onOpen={onSearchDrawerOpen} />
						<CartButton onOpen={onCartDrawerOpen} />
					</Flex>
				</GridItem>
			</GridWrapper>

			{/* This drawer will open from top section */}
			<SearchDrawer isOpen={isOpen} onClose={onClose} />
			<CartDrawer isOpen={cartOpen} onClose={onCartDeawerClose} />
		</Wrapper>
	);
};

export default Header;

const Wrapper = ({ children }: { children: ReactNode }) => {
	const { content } = useContent();
	return (
		<Container
			borderBottom={`1px solid ${content?.header?.borderColor}`}
			bg={content?.header?.bgColor}
			color={content?.header?.fgColor}
			position='sticky'
			top='0px'
			left='0px'
			zIndex={HeaderZIndex}
		>
			{children}
		</Container>
	);
};

const GridWrapper = ({ children }: { children: ReactNode }) => (
	<Grid
		px={{
			base: padding.layoutPadding_X_Mobile,
			lg: padding.layoutPadding_X,
		}}
		templateColumns='1fr 1fr'
		gap={2}
		h='full'
	>
		{children}
	</Grid>
);
