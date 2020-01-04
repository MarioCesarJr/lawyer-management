import React, { useState } from 'react';
import api from '~/services/api';
import * as Yup from 'yup';
import { Form, Input, Choice } from '@rocketseat/unform';
import { Top, Container, Title, Required, SaveButton } from './styles';

import Tabs from '~/components/Tabs';

const schema = Yup.object().shape({
    entity: Yup.string().required('O tipo é obrigatório'),
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um email válido'),
    phone: Yup.string(),
    cpf: Yup.string(),
    rg: Yup.string(),
});

export default function NewCustomer() {
    const initialData = {
        entity: 'PESSOA FÍSICA',
    };

    const [nameActive, setNameActive] = useState(false);

    function activateNameField() {
        setNameActive(true);
    }

    function disableNameField(e) {
        if (e.target.value === '') {
            setNameActive(false);
        }
    }

    const [emailActive, setEmailActive] = useState(false);

    function activateEmailField() {
        setEmailActive(true);
    }

    function disableEmailField(e) {
        if (e.target.value === '') {
            setEmailActive(false);
        }
    }

    const [phoneActive, setPhoneActive] = useState(false);

    function activatePhoneField() {
        setPhoneActive(true);
    }

    function disablePhoneField(e) {
        if (e.target.value === '') {
            setPhoneActive(false);
        }
    }

    const [cpfActive, setCpfActive] = useState(false);

    function activateCpfField() {
        setCpfActive(true);
    }

    function disableCpfField(e) {
        if (e.target.value === '') {
            setCpfActive(false);
        }
    }

    const [rgActive, setRgActive] = useState(false);

    function activateRgField() {
        setRgActive(true);
    }

    function disableRgField(e) {
        if (e.target.value === '') {
            setRgActive(false);
        }
    }

    async function handleSubmit(data, { resetForm }) {
        await api.post('/customers', data);

        setNameActive(false);
        setEmailActive(false);
        setPhoneActive(false);
        setCpfActive(false);
        setRgActive(false);
        resetForm();
    }

    return (
        <>
            <Top>
                <Title>Adicionar cliente</Title>
                <Required>
                    <span>*</span>Campo obrigatório
                </Required>
            </Top>

            <Container>
                <Form
                    schema={schema}
                    onSubmit={handleSubmit}
                    initialData={initialData}
                >
                    <div className="person_type">
                        <Choice
                            name="entity"
                            options={[
                                {
                                    value: 'PESSOA FÍSICA',
                                    label: 'Pessoa física',
                                },
                                {
                                    value: 'PESSOA JURÍDICA',
                                    label: 'Pessoa jurídica',
                                },
                            ]}
                        />
                    </div>

                    <Tabs>
                        <div label="Informações pessoais">
                            <div className="panel">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className={nameActive ? 'on' : ''}
                                    >
                                        <span>
                                            Nome<span>*</span>
                                        </span>
                                        <Input
                                            type="text"
                                            name="name"
                                            onFocus={activateNameField}
                                            onBlur={disableNameField}
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className={emailActive ? 'on' : ''}
                                    >
                                        <span>Email</span>
                                        <Input
                                            type="email"
                                            name="email"
                                            onFocus={activateEmailField}
                                            onBlur={disableEmailField}
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className={phoneActive ? 'on' : ''}
                                    >
                                        <span>Telefone</span>
                                        <Input
                                            type="text"
                                            name="phone"
                                            onFocus={activatePhoneField}
                                            onBlur={disablePhoneField}
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="cpf"
                                        className={cpfActive ? 'on' : ''}
                                    >
                                        <span>CPF</span>
                                        <Input
                                            type="text"
                                            name="cpf"
                                            onFocus={activateCpfField}
                                            onBlur={disableCpfField}
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="rg"
                                        className={rgActive ? 'on' : ''}
                                    >
                                        <span>RG</span>
                                        <Input
                                            type="text"
                                            name="rg"
                                            onFocus={activateRgField}
                                            onBlur={disableRgField}
                                        />
                                    </label>
                                </div>
                                <SaveButton type="submit">Salvar</SaveButton>
                            </div>
                        </div>

                        <div label="Endereço">
                            <div className="panel"></div>
                        </div>
                    </Tabs>
                </Form>
            </Container>
        </>
    );
}
