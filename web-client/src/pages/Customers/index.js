import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';

import { Top, Title, AddCustomer, Container } from './styles';

export default function Customers() {
    const [allChecked, setAllChecked] = useState(false);
    const [select, setSelect] = useState(0);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function loadCustomers() {
            const response = await api.get('/customers');
            setCustomers(response.data);
        }

        loadCustomers();
    }, []);

    async function deleteCustomer() {
        let arrayId = [];
        customers.forEach(customer => {
            if (customer.isChecked) {
                arrayId.push(customer.id);
            }
        });
        await api.delete(`/customers/${arrayId}`);
    }

    function handleChange(e) {
        let itemName = e.target.name;
        let checked = e.target.checked;

        if (itemName === 'checkAll') {
            setAllChecked(checked);
            setSelect(checked ? customers.length : 0);
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
            setSelect(checked ? select + 1 : select - 1);
            setAllChecked(customers.every(item => item.isChecked));
        }
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
                    {select > 0 && (
                        <MdDeleteForever
                            title="excluir"
                            onClick={deleteCustomer}
                        />
                    )}
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
