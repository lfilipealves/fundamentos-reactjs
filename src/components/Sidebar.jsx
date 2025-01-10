import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){

return(
<aside className={styles.sidebar}>
    <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    <div className={styles.profile}>
    <img className={styles.avatar} src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-coding-programming-profession-avatar-pack-people-icons-7675299.png" />

        <strong>Diego Fernandes</strong>
        <span>Web Developer</span>
    </div>
    <footer>
        <a href="#"><PencilLine size={20} />Editar seu perfil</a>
    </footer>
</aside>
    
);
}