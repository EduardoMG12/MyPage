import React, { HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ICarouselItem extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode,
}

const Root: React.FC<ICarouselItem> = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

interface ICarouselItemImage extends React.HTMLAttributes<HTMLImageElement> {
    imgHref: string,
    imgAlt: string,
}

const Image: React.FC<ICarouselItemImage> = ({ imgHref, imgAlt, ...props }) => {
    return (
        <>
            <img {...props} src={imgHref} alt={imgAlt} />
        </>
    )
}

interface ICarouselContentText extends HTMLAttributes<any> {
    children: ReactNode,
    id?: string
}

const Title: React.FC<ICarouselContentText> = ({ children, ...props }) => {
    return (
        <>
            <h2 {...props} >{children}</h2>
        </>
    )
}

const SubTitle: React.FC<ICarouselContentText> = ({ children, ...props }) => {
    return (
        <h3 {...props} >{children}</h3>
    )
}

const Description: React.FC<ICarouselContentText> = ({ children, ...props }) => {
    return (
        <p {...props} >{children}</p>
    )
}

interface ICarouselItemList extends React.HTMLProps<HTMLUListElement> {
    children: ReactNode
}


const List: React.FC<ICarouselItemList> = ({ children, ...props }) => {
    return (
        <ul {...props} >
            {children}
        </ul>
    )
}

const ItemList: React.FC<ICarouselContentText> = ({ children, ...props }) => {
    return (
        <li {...props} >
            {children}
        </li>
    )
}

interface ICarouselItemLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
    LinkHref: string,

}


const LinkComponent: React.FC<ICarouselItemLink> = ({ children, LinkHref, ...props }) => {
    return (
        <>
            <a {...props} href={LinkHref} target="_blank">
                {children}
            </a>
        </>
    )
}

interface IConditionalComponent {
    children: ReactNode,
    className?: string
}

const ConditionalComponent: React.FC<IConditionalComponent> = ({ children, className, ...props }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

Root.displayName = 'Card.RootItem'
Root.displayName = 'Card.Image'
Root.displayName = 'Card.Title'
Root.displayName = 'Card.SubTitle'
Root.displayName = 'Card.Description'
Root.displayName = 'Card.List'
Root.displayName = 'Card.ItemList'
Root.displayName = 'Card.Link'
Root.displayName = 'Card.ConditionalComponent'


export const Card = {
    Root,
    Image,
    Title,
    SubTitle,
    Description,
    List,
    ItemList,
    Link: LinkComponent,
    ConditionalComponent
}