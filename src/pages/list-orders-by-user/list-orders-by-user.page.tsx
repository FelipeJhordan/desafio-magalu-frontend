import React from 'react';

import BreadCrumb from '../../components/breadcrump/breadcrumb.component';

const ListOrderByUserPage: React.FC = () => {
    return (
        <BreadCrumb current='PEDIDOS' parent='HOME' parentPath='/' />
    );
};

export default ListOrderByUserPage;