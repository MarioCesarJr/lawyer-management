import React, { useState } from 'react';

import { Top, Container, Title, Required } from './styles';

export default function Customers() {
    const [nameActive, setNameActive] = useState(false);
    const [name, setName] = useState('');

    function activateNameField() {
        setNameActive(true);
    }

    function disableNameField(e) {
        if (e.target.value === '') {
            setNameActive(false);
        }
    }

    const [emailActive, setEmailActive] = useState(false);
    const [email, setEmail] = useState('');

    function activateEmailField() {
        setEmailActive(true);
    }

    function disableEmailField(e) {
        if (e.target.value === '') {
            setEmailActive(false);
        }
    }

    const [phoneActive, setPhoneActive] = useState(false);
    const [phone, setPhone] = useState('');

    function activatePhoneField() {
        setPhoneActive(true);
    }

    function disablePhoneField(e) {
        if (e.target.value === '') {
            setPhoneActive(false);
        }
    }

    const [cpfActive, setCpfActive] = useState(false);
    const [cpf, setCpf] = useState('');

    function activateCpfField() {
        setCpfActive(true);
    }

    function disableCpfField(e) {
        if (e.target.value === '') {
            setCpfActive(false);
        }
    }

    const [rgActive, setRgActive] = useState(false);
    const [rg, setRg] = useState('');

    function activateRgField() {
        setRgActive(true);
    }

    function disableRgField(e) {
        if (e.target.value === '') {
            setRgActive(false);
        }
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
                <form>
                    <div className="person_type">
                        <input type="radio" name="natural_person" checked />
                        <label>Pessoa física</label>

                        <input type="radio" name="legal_person" />
                        <label>Pessoa jurídica</label>
                    </div>

                    <div className="panel">
                        <div>
                            <label
                                htmlFor="name"
                                className={nameActive ? 'on' : ''}
                            >
                                <span>
                                    Nome<r>*</r>
                                </span>
                                <input
                                    type="text"
                                    id="name"
                                    onFocus={activateNameField}
                                    onBlur={disableNameField}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className={emailActive ? 'on' : ''}
                            >
                                <span>Email</span>
                                <input
                                    type="text"
                                    id="email"
                                    onFocus={activateEmailField}
                                    onBlur={disableEmailField}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className={phoneActive ? 'on' : ''}
                            >
                                <span>Telefone</span>
                                <input
                                    type="text"
                                    id="phone"
                                    onFocus={activatePhoneField}
                                    onBlur={disablePhoneField}
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="cpf"
                                className={cpfActive ? 'on' : ''}
                            >
                                <span>CPF</span>
                                <input
                                    type="text"
                                    id="cpf"
                                    onFocus={activateCpfField}
                                    onBlur={disableCpfField}
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="rg"
                                className={rgActive ? 'on' : ''}
                            >
                                <span>RG</span>
                                <input
                                    type="text"
                                    id="rg"
                                    onFocus={activateRgField}
                                    onBlur={disableRgField}
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    );
}
