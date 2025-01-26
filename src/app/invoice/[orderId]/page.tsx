'use client';
import { PageLayout } from '@/components';
import Invoice from '@/components/invoice-page/Invoice';
import React from 'react';
import { data } from '@/lib/config/data';
import { useParams } from 'next/navigation';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { useGetByIdQuery } from '@/store/services/commonApi';

const page = () => {
	const { orderId } = useParams<{ orderId: string }>();
	const { data, isLoading } = useGetStoreQuery({});

	const { data: orderData, isFetching } = useGetByIdQuery(
		{
			path: `orders`,
			id: orderId,
		},
		{ skip: !orderId }
	);

	if (isLoading || !data) return <PageLayout isLoading={true} />;

	console.log('OrderDta', orderData);

	console.log('Data', data);
	console.log('Id', orderId);

	return (
		<PageLayout isLoading={isLoading || isFetching}>
			<Invoice basic={data?.basic} content={data?.content} data={orderData} />
		</PageLayout>
	);
};

export default page;
