import React from 'react'

const List = () => {

    // array di prodotti
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    return (
        <div>
            <ul>
                {
                    // genero la lista dei prodotti con map
                    products.map((p) => {
                        return <li>
                            <p><b>Prodotto:</b> {p.name} - <b>Prezzo:</b> {p.price} &euro;</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default List
