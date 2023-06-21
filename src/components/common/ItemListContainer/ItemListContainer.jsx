import React from "react";
import '../ItemListContainer/itemListContainer.css'

const ItemListContainer = (props)=>{
    return (
        <h1 className="container-itemList">{props.greeting}</h1>
    )
}
export default ItemListContainer