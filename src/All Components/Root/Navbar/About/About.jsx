import React, { useState } from 'react';

const About = () => {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setShowName(true);
    }


    return (
        <div>
            <p className="mt-10 mb-20 mx-auto text-3xl font-semibold text-blue-300">This is about section</p>

            <div className="App">
                <form>
                    <label>Name:</label>
                    <input
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">
                        Submit
                    </button>
                </form>
                {/* Checks the condition if showName is 
      true, which will be true only if 
      we click on the submit button */}
                {showName === true && <p>You have submitted. Name: {name}</p>}
            </div>

        </div>
    );
};

export default About;