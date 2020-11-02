import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore.js';
import Creator from '../Creator/Creator';


class App extends React.Component {
  //wrzucamy tutaj listy
  
  addList(listData)
  {
    <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
      <List {...listData}/>
      <Creator text={'new list'} action={listData =>(this.addList(listData))}/>
    </main>;
  }
  render(){
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData}/>
        <Creator text={'new list'} action={listData =>(this.addList(listData))}/>
      </main>
    );
  }
}

export default App;
