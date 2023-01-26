import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const handleSubscribe = async () => {
    try {
      await axios.post(`${baseUrl}/subscribe`, { email, category });
      alert('Subscribed');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleUnsubscribe = async () => {
    try {
      await axios.delete(`${baseUrl}/unsubscribe`, { data: { email, category } });
      alert('Unsubscribed');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <h1>Subscribe to our Content</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="none" selected disabled hidden>Select an Option</option>
        <option value="sports">Sports</option>
        <option value="entertainment">Entertainment</option>
        <option value="boycott">Boycott</option>
        <option value="hollywood">Hollywood</option>
        <option value="bollywood">Bollywood</option>
        <option value="politics">Politics</option>
        <option value="crime">Crime</option>
        <option value="religious">Religious</option>
        <option value="automobile">Automobile</option>
        <option value="education">Education</option>
        <option value="health">Health</option>
        <option value="war">War</option>
        <option value="business">Business</option>
        <option value="fashion">Fashion</option>
        <option value="environment">Environment</option>
        <option value="accidents">Accidents</option>
      </select>
      <button onClick={handleSubscribe}>Subscribe</button><br/>
      <button onClick={handleUnsubscribe}>Unsubscribe</button>
    </div>
  );
};

export default App;
