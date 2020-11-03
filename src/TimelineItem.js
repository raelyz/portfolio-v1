import React from 'react';
import './TimelineItem.css';

function TimelineItem({ data }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                {data.text.map(data =>
                    <p>{data}</p>)}
                {data.link && (
                    <a className="readmore"
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}
                <span className="circle" />
            </div>
        </div>
    )
}

export default TimelineItem
