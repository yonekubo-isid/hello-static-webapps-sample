import { useState } from 'react';

const Hello = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('Hello!');

  const handleNameChange = (e) => setName(e.target.value);

  async function getGreeting() {
    const response = await fetch(`/api/greeting/${name}`, {
      method: 'GET'
    });
    const json = await response.json();
    return json.greeting;
  }

  const handleButtonClick = (e) => {
    getGreeting()
      .then(value => {
        setGreeting(value)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
      <>
          <div>
              <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
              <input type="button" onClick={handleButtonClick} value="Greet" disabled={!name} />
          </div>
          <span>{ greeting }</span>
      </>
  );
}

export default Hello;