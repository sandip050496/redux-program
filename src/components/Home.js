import React from 'react'
import { data } from '../DataFile'

export default function Home(props) {
    return (
        <div>
            <h1>Home Component</h1>
            {data && data.map((item) => {
                return (
                    <div className="cart-wrapper" style={{marginBottom: "30px"}}>
                        <div className="img-wrapper item">
                            <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                        </div>
                        <div className="text-wrapper item">
                            <span>
                                {item.name}
                            </span>
                            <span>
                                Price: ₹{item.price}
                            </span>
                        </div>
                        <div className="btn-wrapper item">
                            <button onClick={() => props.addToCarthandler(item)}>
                                Add To Cart</button>
                            <button onClick={() => props.removeToCartHandler(item.id)} style={{backgroundColor: "#358be3"}}>
                                Remove To Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
