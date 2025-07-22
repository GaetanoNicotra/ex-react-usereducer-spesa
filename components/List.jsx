import React from 'react'
import { useState } from 'react'

const List = () => {

    // array di prodotti
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    // lista prodotti del carrello
    const [addedProducts, setAddedProducts] = useState([]);

    // funzione per aggiungere i prodotti al carrello
    const addToCart = product => {
        const aggiunto = addedProducts.some(p => p.name === product.name)
        if (aggiunto) {
            return;
        }
        setAddedProducts(curr => [...curr, { ...product, quantity: 1 }])
    }

    return (
        <div>
            <ul>
                {
                    // genero la lista dei prodotti con map
                    products.map((p, i) => {
                        return <li key={i}>
                            <p><b>Prodotto:</b> {p.name} - <b>Prezzo:</b> {p.price} &euro; <button onClick={() => addToCart(p)} >Aggiungi al carrello</button></p>
                        </li>
                    })
                }
            </ul>

            <h4>Prodotti nel carrello</h4>
            <ul>
                {
                    // genero la lista dei prodotti nel carrello 
                    addedProducts.map((a, i) => {
                        return <li key={i}>
                            <p><b>{a.quantity} x Prodotto:</b> {a.name} - <b>Prezzo:</b> {a.price} &euro;</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default List