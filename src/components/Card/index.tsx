import React, { HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ICarouselItem {
    children: ReactNode
}

const Root: React.FC<ICarouselItem> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

interface ICarouselItemImage {
    imgHref: string,
    imgAlt: string,
}

const Image: React.FC<ICarouselItemImage> = ({ imgHref, imgAlt }) => {
    return (
        <>
            <img src={imgHref} alt={imgAlt} />
        </>
    )
}

interface ICarouselContentText {
    children: ReactNode
}

const Title: React.FC<ICarouselContentText> = ({ children }) => {
    return (
        <>
            <h2>{children}</h2>
        </>
    )
}

const SubTitle: React.FC<ICarouselContentText> = ({ children }) => {
    return (
        <h3>{children}</h3>
    )
}

const Description: React.FC<ICarouselContentText> = ({ children }) => {
    return (
        <p>{children}</p>
    )
}

interface ICarouselItemList extends React.HTMLProps<HTMLUListElement> {
    children: React.ReactElement<typeof ItemList>
}


const List: React.FC<ICarouselItemList> = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    )
}

const ItemList: React.FC<ICarouselContentText> = ({ children }) => {
    return (
        <li>
            {children}
        </li>
    )
}

interface ICarouselItemLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
    LinkHref: string

}


const LinkComponent: React.FC<ICarouselItemLink> = ({ children, LinkHref, ...props }) => {
    return (
        <>
            <a href={LinkHref} target="_blank">
                {children}
            </a>
        </>
    )
}

Root.displayName = 'CarouselItem.RootItem'
Root.displayName = 'CarouselItem.Image'
Root.displayName = 'CarouselItem.Title'
Root.displayName = 'CarouselItem.SubTitle'
Root.displayName = 'CarouselItem.Description'
Root.displayName = 'CarouselItem.List'
Root.displayName = 'CarouselItem.ItemList'
Root.displayName = 'CarouselItem.Link'


export const Card = {
    Root,
    Image,
    Title,
    SubTitle,
    Description,
    List,
    ItemList,
    Link: LinkComponent
}