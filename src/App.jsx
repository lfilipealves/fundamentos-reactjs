import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/SideBar'

export function App(){
  return (
    
    <div>

      <Header />

    <div className={styles.wrapper}>
    <Sidebar />
    

    <main>
      <Post author="Diego Fernandes" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quaerat voluptatum accusamus, veniam mollitia perspiciatis ducimus eveniet fuga saepe quis repudiandae, aliquid odio excepturi tempora ut consectetur, tempore atque expedita."/>

    <Post author="João Basso" content="Um novo post muito legal!" />
  
    
    </main>
    </div>
</div>

  )
}

