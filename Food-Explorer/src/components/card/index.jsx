import { useState } from "react";

import { Component } from "./style";
import { Button } from "../button";

import { Link } from "react-router-dom";


export function Card({ id,img, food, description, price, onIncludeAmount, ...rest }) {

    const [amount, setAmount] = useState(1)

    const increaseAmount = () => {
        setAmount(amount + 1);
    };

    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };



    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleIncludeAmount = () => {
        onIncludeAmount(amount);
      };



    return (

        <Component>

            <div className="itens">
                <button className="BgNone" id="favorite" onClick={toggleFavorite}>

                    <svg
                        width="26"
                        height="24"
                        fill="white"
                        viewBox="0 0 26 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.431 0.547789C17.3245 0.160119 18.2845 -0.0261067 19.2515 0.00322722C20.2184 0.0325601 21.1665 0.276652 22.0374 0.71713C22.9076 1.15726 23.68 1.78296 24.3106 2.5511C26.8405 5.6197 26.4109 10.3056 23.8142 13.1522L23.8125 13.154L14.4368 23.38L13.6996 22.7041L14.4335 23.3835C14.0785 23.767 13.5797 24.0002 13.0399 24.0002C12.5001 24.0002 12.0013 23.767 11.6463 23.3835L11.6431 23.38L2.02427 12.8889L2.02403 12.8886C1.35437 12.1577 0.832743 11.2904 0.48681 10.342C0.140901 9.39356 -0.0232599 8.3808 0.00265199 7.36472C0.0285639 6.34864 0.244109 5.34672 0.638319 4.41957C1.03241 3.49272 1.59804 2.65724 2.30497 1.96679C5.18795 -0.860732 9.62203 -0.352917 12.259 2.50881L12.2632 2.51343L12.2632 2.51344L13.0403 3.36745L14.06 2.24794L14.0625 2.24526C14.7328 1.51465 15.5378 0.935316 16.431 0.547789ZM13.0399 21.9441L22.3366 11.8042C22.3369 11.8039 22.3373 11.8035 22.3376 11.8032C24.3465 9.60003 24.588 6.03087 22.7669 3.8227L22.7654 3.82087C22.3047 3.25957 21.7488 2.81242 21.1347 2.50182C20.5209 2.19139 19.8597 2.0226 19.1908 2.00231C18.5219 1.98202 17.8541 2.11046 17.227 2.38253C16.6001 2.65453 16.0243 3.06573 15.5373 3.59614C15.5369 3.59655 15.5365 3.59697 15.5361 3.59739L13.7792 5.52629C13.5896 5.7344 13.3211 5.85297 13.0396 5.8529C12.7582 5.85283 12.4897 5.73411 12.3003 5.5259L10.7861 3.86185C8.79329 1.70132 5.65945 1.47753 3.70476 3.39528L3.70304 3.39697L3.70304 3.39697C3.19108 3.89682 2.77308 4.51016 2.47886 5.20215C2.1846 5.89422 2.02159 6.64762 2.002 7.41571C1.98241 8.18381 2.10676 8.94661 2.36574 9.65666C2.62465 10.3665 3.0115 11.0057 3.49845 11.5373C3.49853 11.5374 3.49861 11.5375 3.49869 11.5376L13.0399 21.9441Z"
                            fill={isFavorited ? 'red' : 'white'}
                        />
                    </svg>

                </button>

                <img id="foodImg" src={img} />
                
                <Link to={`/food/${id}`}>
                <p id="foodName">{food}</p>
                </Link>
                <p id="descriptionCard">{description}</p>
                <p id="price"> R$ {price} </p>


                <div className="hideInclud">

                    <div className="flex">

                        <div id="amountCard">

                            <button className="BgNone" onClick={decreaseAmount}>

                                <img src="src/images/card/less.svg" alt="" />

                            </button>

                            <p>{String(amount).padStart(2, '0')}</p>

                            <button className="BgNone" onClick={increaseAmount}>

                                <img src="src/images/card/more.svg" alt="" />

                            </button>


                        </div>

                        <Button onClick={handleIncludeAmount}  id="include" title="incluir" />


                    </div>


                </div>

                <div className="wrapperInclud">

                    <div id="amountCard">

                        <button className="BgNone" onClick={decreaseAmount}>

                            <img src="src/images/card/less.svg" alt="" />

                        </button>

                        <p>{String(amount).padStart(2, '0')}</p>

                        <button className="BgNone" onClick={increaseAmount}>

                            <img src="src/images/card/more.svg" alt="" />

                        </button>


                    </div>

                    <Button onClick={handleIncludeAmount} id="include" title="incluir" />


                </div>

            </div>









        </Component>





    )





}