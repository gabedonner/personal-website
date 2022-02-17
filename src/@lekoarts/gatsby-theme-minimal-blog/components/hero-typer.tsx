import React, { useState } from 'react';
import TypeIt from "typeit-react";

export default () => {
  const [buttonText, setButtonText] = useState("Freeze");
  const [instance, setInstance] = useState(null);

  const toggleFreeze = () => {
    if (instance.is("frozen")) {
      instance.unfreeze();
      setButtonText("Freeze");
      return;
    }

    instance.freeze();
    setButtonText("Unfreeze");
  };

  return (
    <div className="App">
      <button onClick={toggleFreeze}>{buttonText}</button>

      <TypeIt
        options={{ loop: true }}
        getAfterInit={(instance) => {
          setInstance(instance);
          return instance;
        }}
      >
        This will just keep on going.
      </TypeIt>
    </div>
  );
};