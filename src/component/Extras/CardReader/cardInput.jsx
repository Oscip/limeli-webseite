import React, { useState } from 'react';

const CardReader = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div>
            <div className="payment-title">
                <h1>Payment Information</h1>
            </div>
            <div className="container preload">
                <div
                    className={`creditcard ${isFlipped ? 'flipped' : ''}`}
                    onClick={handleFlip}
                >
                    <div className="front">
                        <div id="ccsingle"></div>
                        <svg
                            version="1.1"
                            id="cardfront"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 750 471"
                            style={{ enableBackground: 'new 0 0 750 471' }}
                            xmlSpace="preserve"
                        >
                            {/* SVG details omitted for brevity */}
                            <text
                                transform="matrix(1 0 0 1 60.106 295.0121)"
                                id="svgnumber"
                                className="st2 st3 st4"
                            >
                                {cardNumber || '0123 4567 8910 1112'}
                            </text>
                            <text
                                transform="matrix(1 0 0 1 54.1064 428.1723)"
                                id="svgname"
                                className="st2 st5 st6"
                            >
                                {name || 'JOHN DOE'}
                            </text>
                            <text
                                transform="matrix(1 0 0 1 574.4219 433.8095)"
                                id="svgexpire"
                                className="st2 st5 st9"
                            >
                                {expirationDate || '01/23'}
                            </text>
                        </svg>
                    </div>
                    <div className="back">
                        <svg
                            version="1.1"
                            id="cardback"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 750 471"
                            style={{ enableBackground: 'new 0 0 750 471' }}
                            xmlSpace="preserve"
                        >
                            {/* Back SVG details omitted */}
                            <text
                                transform="matrix(1 0 0 1 621.999 227.2734)"
                                id="svgsecurity"
                                className="st6 st7"
                            >
                                {securityCode || '985'}
                            </text>
                            <text
                                transform="matrix(1 0 0 1 59.5073 228.6099)"
                                id="svgnameback"
                                className="st12 st13"
                            >
                                {name || 'John Doe'}
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="form-container">
                <div className="field-container">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        maxLength="20"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value.toUpperCase())}
                    />
                </div>
                <div className="field-container">
                    <label htmlFor="cardnumber">Card Number</label>
                    <span id="generatecard" onClick={() => setCardNumber('4111 1111 1111 1111')}>
            Generate Random
          </span>
                    <input
                        id="cardnumber"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div className="field-container">
                    <label htmlFor="expirationdate">Expiration (mm/yy)</label>
                    <input
                        id="expirationdate"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                    />
                </div>
                <div className="field-container">
                    <label htmlFor="securitycode">Security Code</label>
                    <input
                        id="securitycode"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        value={securityCode}
                        onChange={(e) => setSecurityCode(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardReader;
