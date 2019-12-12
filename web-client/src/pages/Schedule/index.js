import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import {
    Container,
    Top,
    Title,
    AddEvent,
    Modal,
    ModalContent,
    ModalTitle,
    Required,
    SaveModalButton,
    CloseModalButton,
} from './styles';

export default function Schedule() {
    const [modalOpen, setModalOpen] = useState(false);

    function handleModal() {
        if (modalOpen === false) {
            setModalOpen(true);
        } else {
            setModalOpen(false);
        }
    }

    const data = [
        {
            title: 'evento 01',
            color: '#1e94d2',
            date: '2019-12-09',
        },
        {
            title: 'evento 01',
            color: '#1e94d2',
            date: '2019-12-09',
        },
        {
            title: 'evento 01',
            color: '#1e94d2',
            date: '2019-12-09',
        },
        {
            title: 'evento 01',
            color: '#1e94d2',
            date: '2019-12-09',
        },
        {
            title: 'evento 01',
            color: '#1e94d2',
            date: '2019-12-09',
        },
        {
            title: 'evento 01',
            color: '#1e94d2',
            date: '2019-12-09',
        },
        {
            title: 'evento 02',
            color: '#1e94d2',
            date: '2019-12-13',
        },
        {
            title: 'evento 03',
            color: '#1e94d2',
            date: '2019-12-18',
        },
    ];

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

    function handleDateClick(arg) {
        alert(arg.dateStr);
        alert(arg.view.title);
    }

    function handleClick(info) {
        alert(info.event.title);
    }

    return (
        <>
            <Top>
                <Title>Agenda</Title>
                <AddEvent onClick={handleModal}>Adicionar</AddEvent>
            </Top>

            {modalOpen && (
                <Modal>
                    <ModalContent>
                        <Top>
                            <ModalTitle>Adicionar evento</ModalTitle>
                            <Required>
                                <span>*</span>Campo obrigatório
                            </Required>
                        </Top>
                        <form>
                            <div>
                                <label
                                    htmlFor="title"
                                    className={titleActive ? 'on' : ''}
                                >
                                    <span>
                                        Título<span>*</span>
                                    </span>
                                    <input
                                        rows="4"
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
                                <div>
                                    <label
                                        htmlFor="initialDate"
                                        className={
                                            initialDateActive ? 'on' : ''
                                        }
                                    >
                                        <span>
                                            Data inicial<span>*</span>
                                        </span>
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
                                        <span>
                                            Data final<span>*</span>
                                        </span>
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

                            <div>
                                <label
                                    htmlFor="description"
                                    className={descriptionActive ? 'on' : ''}
                                >
                                    <span>Detalhes</span>
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

                            <CloseModalButton onClick={handleModal}>
                                Cancelar
                            </CloseModalButton>

                            <SaveModalButton>Salvar</SaveModalButton>
                        </form>
                    </ModalContent>
                </Modal>
            )}

            <Container>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    locale="pt-br"
                    eventLimit={true}
                    editable={true}
                    events={data}
                    dateClick={handleDateClick}
                    eventClick={handleClick}
                />
            </Container>
        </>
    );
}
