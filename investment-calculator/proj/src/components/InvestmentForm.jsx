import { useState } from "react";

export default function InvestmentForm({ emitUpdatedInputs, inputs }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" onChange={(event) => emitUpdatedInputs('initialInvestment', Number(event.target.value))} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" onChange={(event) => emitUpdatedInputs('annualInvestment', Number(event.target.value))} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" onChange={(event) => emitUpdatedInputs('expectedReturn', Number(event.target.value))} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" onChange={(event) => emitUpdatedInputs('duration', Number(event.target.value))} required />
                </p>
            </div>
        </section>
    );
}