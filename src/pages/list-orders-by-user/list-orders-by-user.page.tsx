import React, { useState } from 'react';
import { DateValueType } from 'react-tailwindcss-datepicker';

import BreadCrumb from '../../components/breadcrump/breadcrumb.component';

import ListFilter from '../../components/list-filter/list-filter.component';
import { ToastService } from '../../services/toast/toast.service';
import { HttpService } from '../../services/http/http.service';
import { GetUsersOrdersResponseType } from '../../data/http-response/get-users-orders-response.type';
import List from '../../components/list/list.component';

export type Query = {
  [key: string]: string | number | Date;
};

const ListOrderByUserPage: React.FC = () => {
  const [datesFilter, setDatesFilter] = useState<DateValueType>({
    endDate: null,
    startDate: null,
  });

  const [order, setOrder] = useState<string>('');

  const [userOrdersList, setUserOrdersList] = useState<
    GetUsersOrdersResponseType[]
  >([]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const httpService = new HttpService();
    const query: Query = {};

    if (order) {
      query['order_id'] = parseInt(order);
    }

    if (datesFilter?.startDate && datesFilter?.endDate) {
      query['start_date'] = datesFilter.startDate;
      query['end_date'] = datesFilter.endDate;
    }

    const response = await httpService.get<GetUsersOrdersResponseType[]>(
      'user-orders',
      {
        params: query,
        'Content-Type': 'application/json',
      }
    );

    if (response.status !== 200) {
      ToastService.alert('Erro ao buscar pedidos', 'error');
      return;
    }

    if(response.data.length === 0) {
      ToastService.alert('Nenhum pedido encontrado', 'warning');
    }

    setUserOrdersList(response.data);
  };

  return (
    <>
      <BreadCrumb current="PEDIDOS" parent="HOME" parentPath="/" />

      <ListFilter
        dates={datesFilter}
        setDates={setDatesFilter}
        handleOrderChange={setOrder}
        handleSubmit={onSubmit}
        order={order}
      />

      <List userOrdersList={userOrdersList} />
    </>
  );
};

export default ListOrderByUserPage;
