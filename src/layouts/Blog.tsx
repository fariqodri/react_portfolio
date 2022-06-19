import React from 'react';
import { Props } from './App';

type Article = {
    title: string
    description: string
    imageURL: string
    url: string
}

const Blog: React.FunctionComponent<Props> = props => {
    const data: Article[] = [
        {
            title: "Docker Compose for Better Development Experience",
            description: "Setting up new projects in local development has never been easier with the help of Docker Compose",
            imageURL: "https://cdn-images-1.medium.com/max/600/1*TOhrfbBkfQR4UEJwyhlTYg.jpeg",
            url: "https://medium.com/holy-dev/docker-compose-for-better-development-experience-7951c13e60d3"
        },
        {
            title: "TDD is A Waste of Time?",
            description: "Why does TDD matter? What does it actually do besides wasting developers’ valuable time and energy?",
            imageURL: "https://cdn-images-1.medium.com/max/600/1*tg3sYXm2CtVzsYf2IywTjw.png",
            url: "https://medium.com/holy-dev/tdd-is-a-waste-of-time-1689cd067fe4"
        }
    ]

    const articleRender = data.map(v => (
        <a href={v.url} target="_blank" style={{textDecoration: "none"}}>
            <div style={{flexGrow: 1, border: "1px solid #D9D9D9", padding: "0 10px 0"}}>
                <p><b>{v.title}</b></p>
                <p>{v.description}</p>
            </div>
        </a>
    ))

    return (
        <div id={props.id} style={{...props.style, paddingLeft: "5vw"}} className={props.className}>
            <h3>My Blog</h3>
            <div className='blog-container' style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                {articleRender}
            </div>
        </div>
    )
}

export default Blog

