import React, { useState, MouseEvent } from 'react'


interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
    const [isShowHideList, setShowHideList] = useState(true);
    const handleShowHideList = () => {
        setShowHideList(!isShowHideList);
    }

    const [selectIndex, setSelectIndex] = useState(-1)
    return (
        <>
            <h1 onClick={() => { handleShowHideList() }}>{isShowHideList ? 'Hide' : 'Show'} {heading}</h1>
            {isShowHideList &&
                <ul className="list-group" >
                    {items.map((item, index) => (
                        <li
                            onClick={() => {
                                setSelectIndex(index)
                                onSelectItem(item)
                            }}
                            key={item}
                            className={selectIndex === index ? "list-group-item active" : "list-group-item"}

                        >
                            {item} <button>delete</button>
                        </li>
                    ))}


                </ul>
            }

        </>

    )
}

export default ListGroup