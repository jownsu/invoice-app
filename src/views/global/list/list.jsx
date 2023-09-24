import React from "react";

const List = ({
    items,
    resource_name = "item",
    className,
    itemComponent: ItemComponent,
    noItemComponent: NoItemComponent
}) => {

    if(!items.length){
        return <NoItemComponent />
    }

    return (
        <ul className={className}>
            {
                items.map((item, index) => (
                    <li key={index}>
                        <ItemComponent key={index} {...{[resource_name]: item}} />
                    </li>
                ))
            }
        </ul>
    )
}

export default List;