import React from 'react'
import "./Timeline.css";
import TimelineItem from './TimelineItem';

function Timeline() {
    const timelineData = [
        {
            text: [
                `Built projects using MongoDB, Javascript, HTML, CSS, React, Redux, Python, Django, GoogleAuth `,
            ],
            date: 'Aug 2020 - Oct 2020',
            category: {
                tag: 'General Assembly',
                color: '#FF6978'
            },
            link: {
                url:
                    'https://github.com/raelyz',
                text: 'Read more'
            }
        },
        {
            text: [
                `Opened up the first of its kind dining experience in Singapore. Consumers are able to purchase modular and customizable meals tailored to their body needs.`,
                `Carried out consumer UX/UI journey optimisation.`,
                `R&D testing and development of new products.`,
                `Data analysis of sales to cut lean operations.`],
            date: 'Sept 2019 - Oct 2020',
            category: {
                tag: 'Yobo',
                color: '#FF6978'
            },
            link: {
                url:
                    'https://www.facebook.com/yobo.sg/',
                text: 'Read more'
            }
        }, {
            text: [
                `Handled inquiries and preparation of quotations to clients`,
                `Liaison with internal and external units to best match the client's requirements.`],
            date: 'Aug 2017 - Jan 2018',
            category: {
                tag: 'Sulzer',
                color: '#FF6978'
            },
            link: {
                url:
                    'https://www.sulzer.com/',
                text: 'Read more'
            }
        }, {
            text: [
                `Assisted in The Centrepoint AEI renovation project`,
                `Preparation of letters to tenants and lease documents.`],
            date: 'Apr 2014 - Jun 2014',
            category: {
                tag: 'Frasers',
                color: '#FF6978'
            },
            link: {
                url:
                    'https://www.frasersproperty.com/',
                text: 'Read more'
            }
        }]
    return (
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        )
    )
}

export default Timeline
