import React, { useState } from 'react';

import { Top, Container, Title, Required } from './styles';

export default function NewContract() {
    const [statusActive, setStatusActive] = useState(false);
    const [status, setStatus] = useState('');

    function activateStatusField() {
        setStatusActive(true);
    }

    function disableStatusField(e) {
        if (e.target.value === '') {
            setStatusActive(false);
        }
    }

    const [descriptionActive, setDescriptionActive] = useState(false);
    const [description, setDescription] = useState('');

    function activateDescriptionField() {
        setDescriptionActive(true);
    }

    function disableDescriptionField(e) {
        if (e.target.value === '') {
            setDescriptionActive(false);
        }
    }

    const [noteActive, setNoteActive] = useState(false);
    const [note, setNote] = useState('');

    function activateNoteField() {
        setNoteActive(true);
    }

    function disableNoteField(e) {
        if (e.target.value === '') {
            setNoteActive(false);
        }
    }

    const [initialDateActive, setInitialDateActive] = useState(false);
    const [initialDate, setInitialDate] = useState('');

    function activateInitialDateField() {
        setInitialDateActive(true);
    }

    function disableInitialDateField(e) {
        if (e.target.value === '') {
            setInitialDateActive(false);
        }
    }

    const [finalDateActive, setFinalDateActive] = useState(false);
    const [finalDate, setFinalDate] = useState('');

    function activateFinalDateField() {
        setFinalDateActive(true);
    }

    function disableFinalDateField(e) {
        if (e.target.value === '') {
            setFinalDateActive(false);
        }
    }

    const [valueActive, setValueActive] = useState(false);
    const [value, setValue] = useState('');

    function activateValueField() {
        setValueActive(true);
    }

    function disableValueField(e) {
        if (e.target.value === '') {
            setValueActive(false);
        }
    }

    const [responsibleActive, setResponsibleActive] = useState(false);
    const [responsible, setResponsible] = useState('');

    function activateResponsibleField() {
        setResponsibleActive(true);
    }

    function disableResponsibleField(e) {
        if (e.target.value === '') {
            setResponsibleActive(false);
        }
    }

    const [customerActive, setCustomerActive] = useState(false);
    const [customer, setCustomer] = useState('');

    function activateCustomerField() {
        setCustomerActive(true);
    }

    function disableCustomerField(e) {
        if (e.target.value === '') {
            setCustomerActive(false);
        }
    }

    return (
        <>
            <Top>
                <Title>Adicionar Contrato</Title>
                <Required>
                    <span>*</span>Campo obrigatório
                </Required>
            </Top>

            <Container>
                <form>
                    <div className="panel">
                        <div>
                            <label
                                htmlFor="status"
                                className={statusActive ? 'on' : ''}
                            >
                                <span>
                                    Status<span>*</span>
                                </span>
                                <select
                                    type="text"
                                    id="title"
                                    onFocus={activateStatusField}
                                    onBlur={disableStatusField}
                                    value={status}
                                    onChange={e => setStatus(e.target.value)}
                                >
                                    <option></option>
                                    <option>Enviada</option>
                                    <option>Pendente</option>
                                    <option>Aceita</option>
                                    <option>Assinada</option>
                                    <option>Recusada</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className={descriptionActive ? 'on' : ''}
                            >
                                <span>Descrição</span>
                                <textarea
                                    rows="4"
                                    type="text"
                                    id="description"
                                    onFocus={activateDescriptionField}
                                    onBlur={disableDescriptionField}
                                    value={description}
                                    onChange={e =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="note"
                                className={noteActive ? 'on' : ''}
                            >
                                <span>Observação</span>
                                <textarea
                                    type="text"
                                    id="note"
                                    rows="4"
                                    onFocus={activateNoteField}
                                    onBlur={disableNoteField}
                                    value={note}
                                    onChange={e => setNote(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="initialDate"
                                className={initialDateActive ? 'on' : ''}
                            >
                                <span>Data inicial</span>
                                <input
                                    type="text"
                                    id="initialDate"
                                    onFocus={activateInitialDateField}
                                    onBlur={disableInitialDateField}
                                    value={initialDate}
                                    onChange={e =>
                                        setInitialDate(e.target.value)
                                    }
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="finalDate"
                                className={finalDateActive ? 'on' : ''}
                            >
                                <span>Data final</span>
                                <input
                                    type="text"
                                    id="finalDate"
                                    onFocus={activateFinalDateField}
                                    onBlur={disableFinalDateField}
                                    value={finalDate}
                                    onChange={e => setFinalDate(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="value"
                                className={valueActive ? 'on' : ''}
                            >
                                <span>Valor</span>
                                <input
                                    type="text"
                                    id="value"
                                    onFocus={activateValueField}
                                    onBlur={disableValueField}
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="customer"
                                className={customerActive ? 'on' : ''}
                            >
                                <span>Cliente</span>
                                <input
                                    type="text"
                                    id="customer"
                                    onFocus={activateCustomerField}
                                    onBlur={disableCustomerField}
                                    value={customer}
                                    onChange={e => setCustomer(e.target.value)}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="responsible"
                                className={responsibleActive ? 'on' : ''}
                            >
                                <span>Responsável</span>
                                <input
                                    type="text"
                                    id="responsible"
                                    onFocus={activateResponsibleField}
                                    onBlur={disableResponsibleField}
                                    value={responsible}
                                    onChange={e =>
                                        setResponsible(e.target.value)
                                    }
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    );
}
