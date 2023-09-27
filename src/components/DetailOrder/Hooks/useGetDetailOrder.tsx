import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDetailOrder } from '@/service/product';

export type GetPackageQueryParams = {
  token: string;
  id: string;
};

const QUERY_KEY = ['LIST_EXPLORE_ORDER_DETAIL'];

// ** GET

const fetchOrderDetail = async (
  params: GetPackageQueryParams
): Promise<any> => {
  const data = await getDetailOrder(params.token, params.id);
  return data;
};

export const useGetDetailOrder = (params: GetPackageQueryParams) => {
  return useQuery<any, Error>({
    queryKey: [...QUERY_KEY, params],
    queryFn: () => fetchOrderDetail(params),
    keepPreviousData: true,
  });
};
