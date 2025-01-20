import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import { Sidebar } from './components/SideBar'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/programmer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-coding-programming-profession-avatar-pack-people-icons-7675299.png',
      name:'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [ 
         { type: 'paragraph', content: 'Fala galeraa 👋'},
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
            
    ],
    publishedAt: new Date ('2025-01-14 20:32:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name:'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [ 
         { type: 'paragraph', content: 'Fala galeraa 👋'},
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
            
    ],
    publishedAt: new Date ('2022-01-15 16:40:00')
  },
];


export function App(){
  return (
    
    <div>

      <Header />

    <div className={styles.wrapper}>
    <Sidebar />
    

    <main>
     {posts.map(post => {
      return ( <Post
      key={post.id}
       author={post.author}
       content={post.content}
       publishedAt={post.publishedAt}
       />
      )
     })}
    </main>
    </div>
</div>

  )
}

