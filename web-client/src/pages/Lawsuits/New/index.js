import React, { useState } from 'react';

import { Top, Container, Title, Required } from './styles';

export default function NewLawsuit() {
    const [titleActive, setTitleActive] = useState(false);
    const [title, setTitle] = useState('');

    function activateTitleField() {
        setTitleActive(true);
    }

    function disableTitleField(e) {
        if (e.target.value === '') {
            setTitleActive(false);
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

    const [protocolDateActive, setProtocolDateActive] = useState(false);
    const [protocolDate, setProtocolDate] = useState('');

    function activateProtocolDateField() {
        setProtocolDateActive(true);
    }

    function disableProtocolDateField(e) {
        if (e.target.value === '') {
            setProtocolDateActive(false);
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
                <Title>Adicionar Processo/Caso</Title>
                <Required>
                    <span>*</span>Campo obrigatório
                </Required>
            </Top>

            <Container>
                <form>
                    <div className="panel">
                        <div>
                            <label
                                htmlFor="title"
                                className={titleActive ? 'on' : ''}
                            >
                                <span>
                                    Título<span>*</span>
                                </span>
                                <input
                                    type="text"
                                    id="title"
                                    onFocus={activateTitleField}
                                    onBlur={disableTitleField}
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
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
                                htmlFor="protocolDate"
                                className={protocolDateActive ? 'on' : ''}
                            >
                                <span>Data do protocolo</span>
                                <input
                                    type="text"
                                    id="protocolDate"
                                    onFocus={activateProtocolDateField}
                                    onBlur={disableProtocolDateField}
                                    value={protocolDate}
                                    onChange={e =>
                                        setProtocolDate(e.target.value)
                                    }
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
