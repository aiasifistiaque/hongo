'use client';
import colors from '@/theme/colors.theme';
import { useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';
import { CiMenuBurger } from 'react-icons/ci';
import { FaUserFriends, FaUserTag } from 'react-icons/fa';
import { FaTable, FaUnlockKeyhole } from 'react-icons/fa6';
import { GoHomeFill } from 'react-icons/go';
import { GrSubtract } from 'react-icons/gr';
import { ImPriceTag } from 'react-icons/im';
import { IoIosAddCircleOutline, IoIosHome, IoMdBarcode } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';
import { LuImagePlus } from 'react-icons/lu';
import { MdBrandingWatermark } from 'react-icons/md';
import { RiCoupon2Fill, RiSettings3Fill } from 'react-icons/ri';
import { SiCkeditor4 } from 'react-icons/si';
import { FiTag } from 'react-icons/fi';
import {
	TbArrowForward,
	TbFileInvoice,
	TbSelector,
	TbSettings,
	TbTruckDelivery,
} from 'react-icons/tb';
import { TiPrinter } from 'react-icons/ti';
// import { FaRegEdit } from 'react-icons/fa';
import { BsCollectionFill, BsThreeDots } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa6';
import { FcFeedback } from 'react-icons/fc';
import { HiUserGroup } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMinusSmall } from 'react-icons/hi2';
import {
	MdDelete,
	MdFastfood,
	MdFeedback,
	MdOutlineCancel,
	MdOutlineEdit,
} from 'react-icons/md';
// import { IoMdBarcode } from 'react-icons/io';
import {
	IoBagOutline,
	IoGridOutline,
	IoReorderTwoOutline,
	IoSearchOutline,
} from 'react-icons/io5';
// import { FaCartShopping } from 'react-icons/fa6';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

import { FaBarsStaggered } from 'react-icons/fa6';
import { FiHeart, FiUser } from 'react-icons/fi';
import { LuShoppingBag } from 'react-icons/lu';
import { IoIosStar } from 'react-icons/io';
import { CiStar } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { MdLocalPhone } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa6';

export type IconNameOptions =
	| 'add'
	| 'add-image'
	| 'add-tag'
	| 'arrow'
	| 'arrow-right'
	| 'arrow-left'
	| 'barcode'
	| 'brand'
	| 'category'
	| 'clock-outline'
	| 'close'
	| 'collections'
	| 'coupon'
	| 'customer'
	| 'customers'
	| 'dashboard'
	| 'date'
	| 'delete'
	| 'delivery'
	| 'dots'
	| 'edit'
	| 'feedback'
	| 'feedbacks'
	| 'fields'
	| 'home'
	| 'items'
	| 'leave'
	| 'menu'
	| 'order'
	| 'pos'
	| 'product'
	| 'role'
	| 'select'
	| 'settings'
	| 'settings-fill'
	| 'subtract'
	| 'cart'
	| 'bag'
	| 'grid'
	| 'hamburger'
	| 'search'
	| 'user'
	| 'lu-bag'
	| 'wishlist'
	| 'fi-user'
	| 'menu-bar'
	| 'rating-fill'
	| 'rating-outline'
	| 'eye'
	| 'map'
	| 'phone'
	| 'envelope'
	| 'subtract-two'
	| 'tag';

type IconProps = {
	size?: number;
	color?: string;
	name: IconNameOptions;
};

const icons: { [key in IconNameOptions]: FC<{ size: number; color: string }> } =
	{
		arrow: TbArrowForward,
		add: IoAdd,
		subtract: GrSubtract,
		date: BsCalendar2Date,
		select: TbSelector,
		settings: TbSettings,
		'add-tag': IoIosAddCircleOutline,
		home: GoHomeFill,
		'add-image': LuImagePlus,
		product: ImPriceTag,
		dashboard: IoIosHome,
		category: BiSolidCategory,
		order: TbFileInvoice,
		brand: MdBrandingWatermark,
		coupon: RiCoupon2Fill,
		user: FaUserFriends,
		customer: FaUserTag,
		role: FaUnlockKeyhole,
		delivery: TbTruckDelivery,
		'settings-fill': RiSettings3Fill,
		fields: FaTable,
		pos: TiPrinter,
		barcode: IoMdBarcode,
		menu: CiMenuBurger,
		leave: SiCkeditor4,
		edit: MdOutlineEdit,
		items: MdFastfood,
		collections: BsCollectionFill,
		feedback: FcFeedback,
		feedbacks: MdFeedback,
		'clock-outline': FaRegClock,
		dots: BsThreeDots,
		close: MdOutlineCancel,
		delete: MdDelete,
		customers: HiUserGroup,
		cart: IoBagOutline,
		bag: IoBagOutline,
		hamburger: IoReorderTwoOutline,
		grid: IoGridOutline,
		search: IoSearchOutline,
		'arrow-right': IoIosArrowRoundForward,
		'arrow-left': IoIosArrowRoundBack,
		'lu-bag': LuShoppingBag,
		wishlist: FiHeart,
		'fi-user': FiUser,
		'menu-bar': FaBarsStaggered,
		'rating-fill': IoIosStar,
		'rating-outline': CiStar,
		eye: IoEyeOutline,
		map: FaMapMarkerAlt,
		phone: MdLocalPhone,
		envelope: FaRegEnvelope,
		'subtract-two': HiOutlineMinusSmall,
		tag: FiTag,
	};

const Icon: FC<IconProps> = ({ name, ...props }) => {
	const IconComponent = icons[name] || IoIosHome;
	const brandColor = useColorModeValue(colors.brand.light, colors.brand.dark);
	const defaultColor = useColorModeValue('#4a4a4a', 'white');
	return (
		<IconComponent
			size={props.size || 22}
			color={
				name == 'arrow' ? brandColor : props.color ? props.color : defaultColor
			}
			{...props}
		/>
	);
};

export default Icon;
