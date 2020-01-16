import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');
    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const handleAdd = useCallback(() => {
    if (newTech) {
      setTechs([...techs, newTech]);
      setNewTech('');
    }
  }, [techs, newTech]);

  const techsSize = useMemo(() => techs.length, [techs.length]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você possui {techsSize} tecnologias.</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
