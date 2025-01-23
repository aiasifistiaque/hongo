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
import {
	SearchInput,
	SearchButton,
	CartButton,
	LoginButton,
	Container,
	LoggedInIcon,
} from './header-components/index';
import { useContent } from '@/hooks';
import LoginModal from '../drawer/login-drawer/LoginDrawer';
import { useAppSelector, useAuth } from '@/library';
import Link from 'next/link';
import { useGetSelfQuery } from '@/store/services/authApi';

type HeaderProps = BoxProps & {};

const Header: FC<HeaderProps> = ({}) => {
	const { isOpen, onOpen: onSearchDrawerOpen, onClose } = useDisclosure();
	const { cartItems } = useAppSelector(state => state.cart);
	const {
		isOpen: cartOpen,
		onOpen: onCartDrawerOpen,
		onClose: onCartDeawerClose,
	} = useDisclosure();

	const { isLoggedIn } = useAuth();
	const { data } = useGetSelfQuery({});

	const firstLetter = data?.name?.slice(0, 1);

	const {
		isOpen: loginOpen,
		onOpen: onLoginDrawerOpen,
		onClose: onLoginDeawerClose,
	} = useDisclosure();
	const { content, basic } = useContent();

	const cartTotal = cartItems.reduce(
		(acc: any, item: any) => acc + item.qty,
		0
	);

	return (
		<Wrapper>
			<GridWrapper>
				<GridItem>
					<Logo imgSrc={content?.header?.logo || ''} />
				</GridItem>
				<GridItem>
					<Flex gap={2} justifyContent='flex-end' alignItems='center' h='full'>
						<SearchInput />
						<SearchButton onOpen={onSearchDrawerOpen} />
						<CartButton cartTotal={cartTotal} onOpen={onCartDrawerOpen} />

						{!isLoggedIn && <LoginButton onOpen={onLoginDrawerOpen} />}

						{isLoggedIn && (
							<Link href='/dashboard/account'>
								<LoggedInIcon firstLetter={firstLetter} />
							</Link>
						)}
					</Flex>
				</GridItem>
			</GridWrapper>

			{/* This drawer will open from top section */}
			<SearchDrawer isOpen={isOpen} onClose={onClose} />
			<CartDrawer isOpen={cartOpen} onClose={onCartDeawerClose} />
			<LoginModal
				isOpen={loginOpen}
				onClose={onLoginDeawerClose}
				content={content}
				basic={basic}
			/>
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
