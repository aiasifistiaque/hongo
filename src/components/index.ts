export { default as MenuDrawer } from './drawer/search-drawer/MenuDrawer';
export { default as SearchDrawer } from './drawer/search-drawer/SearchDrawer';
export { default as CartDrawer } from './drawer/cart-drawer/CartDrawer';
export { default as DesktopHeader } from './header/Header';
export { default as Banner } from './banner/Banner';
export { default as TopHeader } from './topHeader/TopHeader';
export { default as PageLayout } from './layout/PageLayout';
export { default as SectionPadding } from './section-padding/SectionPadding';
export { default as Overlay } from './overlay/Overlay';

export * from './header';
export * from './icon';
export * from './utils';
export * from './home/index';
export * from './checkout';
export * from './common';
export * from './home-page';
export * from './invoice-page';
export * from './product-carousel';
export * from './collection-page';
export * from './utils/button/index';
export * from './product-details';
export * from './skeleton';
export * from './breadcrumb';
export * from './dashboard-pages';
export * from './pagination';
export * from './filter-modal';

export const getAlignment = (align: string) => {
	if (align == 'center') {
		return 'center';
	} else if (align == 'right') {
		return 'flex-end';
	} else {
		return 'flex-start';
	}
};
