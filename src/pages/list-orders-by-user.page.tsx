import React from 'react';
import Button from '../components/button/button.component';

const ListOrderByUserPage: React.FC = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <Button onClick={() => console.log("Cliquei")}>Login</Button>
        </div>
    );
};

export default ListOrderByUserPage;