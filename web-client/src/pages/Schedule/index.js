import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Container, Top, Title } from './styles';

export default function Schedule() {
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
            </Top>
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
