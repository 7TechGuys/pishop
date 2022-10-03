import React from "react";
import { Link } from 'react-router-dom';

const Slider2 = () => {
    return <>
        <div class="Yellow-Scrollbar">
            <div class="Promotion">
                <img class="spider" src="uploads\spider.png" />
                    <div class="Promo_Copy">
                        <div class="Option">
                            <p class="Option-text">Use code <b>15OFF</b></p>
                        </div>
                        <p class="Promo_Copy_subHead">On All Good's</p>
                        <p class="Promo_Copy_Head">10% OFF</p>
                    </div>

            </div>

            <div class="Promotion">
                <img class="spider" src="uploads\spider1.png" />
                    <div class="Promo_Copy">
                        <div class="Option">
                            <p class="Option-text">In Kakri </p>
                        </div>
                        <p class="Promo_Copy_subHead">Deliver</p>
                        <p class="Promo_Copy_Head">30 Minute</p>
                    </div>

            </div>
            <div class="Promotion">
                <img class="print" src="uploads\print.png" />
                    <div class="Promo_Copy">
                        <div class="Option-print">
                            <p class="Option-text-print">Click to<b> Print</b></p>
                        </div>
                        <p class="Promo_Copy_subHead-print">Your Documents</p>
                        <p class="Promo_Copy_Head-print">Print</p>
                    </div>

            </div>
        </div>
        <div class="Options">
        
        <Link to="/">
        <div class="Option2">
            <p class="Option1-text">
                Recommended
            </p>
        </div>
        </Link>

        <Link to="/search/copy">
        <div class="Option1">
            <p class="Option1-text">
                Copy
            </p>
        </div>
        </Link>

        <Link to="/search/pen">
        <div class="Option1">
            <p class="Option1-text">
                Pen
            </p>
        </div>
        </Link>

        <Link to="/search/pencil">
        <div class="Option1">
            <p class="Option1-text">
                Pencil
            </p>
        </div>
        </Link>

        <Link to="/search/book">
        <div class="Option1">
            <p class="Option1-text">
                Books
            </p>
        </div>
        </Link>

        <Link to="/search/sticker">
        <div class="Option1">
            <p class="Option1-text">
                Sticker
            </p>
        </div>
        </Link>

        <Link to="/search/color">
        <div class="Option1">
            <p class="Option1-text">
                Color
            </p>
        </div>
        </Link>

        <Link to="/search/Bag">
        <div class="Option1">
            <p class="Option1-text">
                Bags
            </p>
        </div>
        </Link>

        <div class="Option1">
            <p class="Option1-text">
                Copy
            </p>
        </div>
        <div class="Option1">
            <p class="Option1-text">
                Pen
            </p>
        </div>
        <div class="Option1">
            <p class="Option1-text">
                Pencil
            </p>
        </div>
        <div class="Option1">
            <p class="Option1-text">
                Books
            </p>
        </div>
        <div class="Option1">
            <p class="Option1-text">
                Sticker
            </p>
        </div>
        <div class="Option1">
            <p class="Option1-text">
                Color
            </p>
        </div>
        <div class="Option1">
            <p class="Option1-text">
                Bags
            </p>
        </div>
 
    </div>
    </>;
};

export default Slider2;