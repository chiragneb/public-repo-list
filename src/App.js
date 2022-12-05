import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import WithListLoading from './components/withListLoading';
import axios from 'axios';

function App() {
  const ListLoading = WithListLoading(List);
  const [appState,  setAppState] = useState({
    loading: false,
    repos: null, 
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/chiragneb/repos`;
   // fetch(apiUrl)
    //     .then((res) => res.json())
   //      .then((repos) => {
   //        setAppState({ loading: false, repos: repos });
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
        });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    <footer>
      <div className='footer'>
        Built{' '}
        <span role='img' aria-label='love'>
          🙏🏻
        </span>{' '} 
        by Chirag Neb
      </div>
    </footer>
    </div>
  );
}

export default App;