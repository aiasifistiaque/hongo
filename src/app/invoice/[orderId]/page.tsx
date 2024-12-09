import { PageLayout } from '@/components';
import { Invoice } from '@/components/invoice';
import React from 'react';
import { data } from '@/lib/config/data';

const page = () => {
	const { order } = data;
	return (
		<PageLayout>
			<Invoice data={order} />
		</PageLayout>
	);
};

export default page;
