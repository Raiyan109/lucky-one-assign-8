import React, { useState } from 'react';

const RandomNumber = () => {



    return (


        <div>
            <div>
                <button onClick={() => handleRandomNumber()}>Choose 1 for me </button>
                <button>Choose again </button>
            </div>
        </div>
    );
};

export default RandomNumber;