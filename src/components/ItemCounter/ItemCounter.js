import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const ItemCounter = ({ prodId, stock, initial, onAdd }) => {

    const [qty, setQty] = useState(initial)

    const addToCounter = () => {
        if (qty <= stock) {
            setQty(qty + 1)
        }
    }

    const substractToCounter = () => {
        if (qty > initial) {
            setQty(qty -1)
        }
    }

    const addToCart = () => {
        onAdd(qty)
    }

    return (
        <>
            <ButtonGroup aria-label="ButtonGroupCard" className="align-items-center">
                <Button onClick={substractToCounter} id={"removeButton-" + prodId} size="sm" variant="outline-dark" className="rounded-circle border-0 m-2" disabled={qty === 0}>
                    <i className="bi bi-dash h4"></i>
                </Button>
                <span as={ButtonGroup} className="m-2 px-3 fs-6"> {qty} </span>
                <Button onClick={addToCounter} id={"addButton-" + prodId} size="sm" variant="outline-dark" className="rounded-circle border-0 m-2" disabled={qty === stock}>
                    <i className="bi bi-plus h4"></i>
                </Button>
            </ButtonGroup>
            <div className="d-grid gap-2">
                <Button onClick={addToCart} id={"addToCart-" + prodId} variant="outline-dark" size="sm" className="border-0 m-2 fs-5" disabled={qty === 0 || qty > stock}>
                    Agregar al carrito
                </Button>
            </div>
        </>
    )
}

export default ItemCounter