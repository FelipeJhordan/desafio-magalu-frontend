import React from 'react';
import { GetUsersOrdersResponseType } from '../../data/http-response/get-users-orders-response.type';

export type ListProps = {
  userOrdersList: GetUsersOrdersResponseType[];
};

const List: React.FC<ListProps> = ({ userOrdersList }: ListProps) => {
  return userOrdersList.map((userOrders, index) => (
    <div className="mb-4 w-full" key={index}>
      {userOrders.orders.map((order, index) => (
        <div
          className=" mx-auto  text-white px-0 bg-header shadow-md"
          key={index}
        >
          <div className="flex justify-between pt-4 px-8 items-center mb-4">
            <div>
              <span className="text-primary   ">ID DO PEDIDO:</span>{' '}
              {order.order_id}
              <span className="text-primary    ml-6 mr-2">USUÁRIO:</span>{' '}
              {userOrders.user_id} - {userOrders.name}
            </div>
            <div>
              <span className="text-primary   ">DATA:</span>{' '}
              {new Date(order.date).toLocaleDateString('pt-BR')}
            </div>
          </div>
          <div className="bg-primary text-black p-2 ">
            <div className="flex  px-6 justify-between">
              <span>ID DO PRODUTO</span>
              <span>VALOR</span>
            </div>
          </div>
          <div className="bg-default_strong p-2">
            {order.products.map((product, index) => (
              <div className="flex justify-between px-4 mb-2" key={index}>
                <span className="ml-16 ">{product.product_id}</span>
                <span className="text-center	">R${product.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-header p-2 rounded-b-lg text-right pr-4">
            <span className="text-primary text-lg">TOTAL:</span> R${order.total}
          </div>
        </div>
      ))}
    </div>
  ));
};

export default List;
