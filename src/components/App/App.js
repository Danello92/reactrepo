import React from 'react';
import styles from './App.scss';
import List from '../List/List.js'


class App extends React.Component {
  //wrzucamy tutaj listy
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>hello world</h2>
<<<<<<< HEAD
        <List title={['things to do',<sup key='1'>Soon!</sup>]}
              image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"}/>
=======
        <List title='Things to do'/>
>>>>>>> refs/remotes/origin/main
      </main>
    )
  }
}

export default App;
