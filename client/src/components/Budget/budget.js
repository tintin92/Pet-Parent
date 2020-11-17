import React from "react";

function Budget() {
    return (
        <div class="wrapper">
            <div class="total">
                <div class="total">Your total is: $<span id="total">0</span></div>
            </div>

            <div class="form">
                <input type="text" id="t-name" placeholder="Name of transaction" />
                <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
                <button id="add-btn"><i class="fa fa-plus buttons"></i> Add Funds</button>
                <button id="sub-btn"><i class="fa fa-minus"></i> Subtract Funds</button>
                <p class="error"></p>
            </div>

            <div class="transactions">
                <table>
                    <thead>
                        <th>Transaction</th>
                        <th>Amount</th>
                    </thead>
                    <tbody id="tbody">

                    </tbody>
                </table>
            </div>

            <canvas id="myChart"></canvas>
        </div>
    );
}

export default Budget;