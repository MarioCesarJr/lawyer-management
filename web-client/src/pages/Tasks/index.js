import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';

import {
    Top,
    Title,
    AddTask,
    Container,
    Modal,
    ModalContent,
    ModalTitle,
    Required,
    SaveModalButton,
    CloseModalButton,
} from './styles';

export default function Tasks() {
    const [modalOpen, setModalOpen] = useState(false);

    function handleModal() {
        if (modalOpen === false) {
            setModalOpen(true);
        } else {
            setModalOpen(false);
        }
    }

    const [priorityActive, setPriorityActive] = useState(false);
    const [priority, setPriority] = useState('');

    function activatePriorityField() {
        setPriorityActive(true);
    }

    function disablePriorityField(e) {
        if (e.target.value === '') {
            setPriorityActive(false);
        }
    }

    const [lawsuitActive, setLawsuitActive] = useState(false);
    const [lawsuit, setLawsuit] = useState('');

    function activateLawsuitField() {
        setLawsuitActive(true);
    }

    function disableLawsuitField(e) {
        if (e.target.value === '') {
            setLawsuitActive(false);
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
                <Title>Tarefas</Title>
                <AddTask onClick={handleModal}>Adicionar</AddTask>
            </Top>

            {modalOpen && (
                <Modal>
                    <ModalContent>
                        <Top>
                            <ModalTitle>Adicionar tarefa</ModalTitle>
                            <Required>
                                <span>*</span>Campo obrigatório
                            </Required>
                        </Top>
                        <form>
                            <div>
                                <label
                                    htmlFor="description"
                                    className={descriptionActive ? 'on' : ''}
                                >
                                    <span>
                                        Tarefa<span>*</span>
                                    </span>
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
                                    htmlFor="lawsuit"
                                    className={lawsuitActive ? 'on' : ''}
                                >
                                    <span>Processo ou caso</span>
                                    <select
                                        type="text"
                                        id="lawsuit"
                                        onFocus={activateLawsuitField}
                                        onBlur={disableLawsuitField}
                                        value={lawsuit}
                                        onChange={e =>
                                            setLawsuit(e.target.value)
                                        }
                                    >
                                        <option></option>
                                        <option>Ação de cobrança</option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <div>
                                    <label
                                        htmlFor="initialDate"
                                        className={
                                            initialDateActive ? 'on' : ''
                                        }
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
                                            onChange={e =>
                                                setFinalDate(e.target.value)
                                            }
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="priority"
                                    className={priorityActive ? 'on' : ''}
                                >
                                    <span>
                                        Prioridade<span>*</span>
                                    </span>
                                    <select
                                        type="text"
                                        id="priority"
                                        onFocus={activatePriorityField}
                                        onBlur={disablePriorityField}
                                        value={priority}
                                        onChange={e =>
                                            setPriority(e.target.value)
                                        }
                                    >
                                        <option></option>
                                        <option>Alta</option>
                                        <option>Média</option>
                                        <option>Baixa</option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <div>
                                    <label
                                        htmlFor="customer"
                                        className={customerActive ? 'on' : ''}
                                    >
                                        <span>Cliente</span>
                                        <select
                                            type="text"
                                            id="customer"
                                            onFocus={activateCustomerField}
                                            onBlur={disableCustomerField}
                                            value={customer}
                                            onChange={e =>
                                                setCustomer(e.target.value)
                                            }
                                        >
                                            <option></option>
                                            <option>Ciclano da Silva</option>
                                            <option>Fulano dos Santos</option>
                                        </select>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="responsible"
                                        className={
                                            responsibleActive ? 'on' : ''
                                        }
                                    >
                                        <span>
                                            Responsável <span>*</span>
                                        </span>
                                        <select
                                            type="text"
                                            id="responsible"
                                            onFocus={activateResponsibleField}
                                            onBlur={disableResponsibleField}
                                            value={responsible}
                                            onChange={e =>
                                                setResponsible(e.target.value)
                                            }
                                        >
                                            <option></option>
                                            <option>Dr. Deltan</option>
                                            <option>Dr. Mouro</option>
                                        </select>
                                    </label>
                                </div>
                            </div>

                            <CloseModalButton onClick={handleModal}>
                                Cancelar
                            </CloseModalButton>

                            <SaveModalButton>Salvar</SaveModalButton>
                        </form>
                    </ModalContent>
                </Modal>
            )}

            <Container>
                <ul>
                    <li>
                        <MdCheck />
                        <div>
                            <strong>
                                Levantar documentos necessários para o processo
                            </strong>
                            <p className="lawsuit">Ação de cobrança</p>
                            <p>12/10/2019 - 20/12/2019</p>
                            <div>
                                <a href="#/">Dr. Deltan</a>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li>
                        <MdCheck />
                        <div>
                            <strong>
                                Levantar documentos necessários para o processo
                            </strong>
                            <p className="lawsuit">Ação de cobrança</p>
                            <p>Conferir se está tudo ok.</p>
                            <p>12/10/2019 - 20/12/2019</p>
                            <div>
                                <a href="#/">Dr. Deltan</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </Container>
        </>
    );
}
