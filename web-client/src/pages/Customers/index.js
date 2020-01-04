import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import { Top, Title, AddCustomer, Container } from './styles';

export default function Customers() {
    const [allChecked, setAllChecked] = useState(false);
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: 'Fulano da Silva',
            phone: '48 2259883',
            email: 'fulano@gmail.com',
            isChecked: false,
        },
        {
            id: 2,
            name: 'Ciclano da Silva',
            phone: '48 2259884',
            email: 'ciclano@gmail.com',
            isChecked: false,
        },
        {
            id: 3,
            name: 'Beltrano da Silva',
            phone: '48 2259885',
            email: 'beltrano@gmail.com',
            isChecked: false,
        },
        {
            id: 4,
            name: 'José da Silva',
            phone: '48 2259886',
            email: 'jose@gmail.com',
            isChecked: false,
        },
        {
            id: 5,
            name: 'André da Silva',
            phone: '48 2259887',
            email: 'andre@gmail.com',
            isChecked: false,
        },
    ]);

    function handleChange(e) {
        let itemName = e.target.name;
        let checked = e.target.checked;

        if (itemName === 'checkAll') {
            setAllChecked(checked);
            setCustomers(
                customers.map(item => ({ ...item, isChecked: checked }))
            );
        } else {
            setCustomers(
                customers.map(item =>
                    item.name === itemName
                        ? { ...item, isChecked: checked }
                        : item
                )
            );

            setAllChecked(customers.every(item => item.isChecked));
        }
        console.log(customers.isChecked);
        // return allChecked;
    }

    return (
        <>
            <Top>
                <Title>Clientes</Title>
                <AddCustomer>
                    <Link to="/new-customer">Adicionar</Link>
                </AddCustomer>
            </Top>

            <Container>
                <form autoComplete="off">
                    <input type="text" placeholder="Encontre um cliente" />
                    <button type="submit">
                        <MdSearch size="25" color="#667581" />
                    </button>
                </form>

                <div className="result">
                    Mostrando {customers.length} de 20 cliente(s)
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="checkAll"
                                    checked={allChecked}
                                    onChange={handleChange}
                                />
                            </td>
                            <td>Nome</td>
                            <td>Telefone</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr key={customer.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        name={customer.name}
                                        // value={customer.name}
                                        checked={customer.isChecked}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <Link to="/info-customer">
                                        {customer.name}
                                    </Link>
                                </td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    );
}
