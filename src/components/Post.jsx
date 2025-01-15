import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post(props){
    console.log(props);
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-coding-programming-profession-avatar-pack-people-icons-7675299.png" alt="" />
                    <div className={styles.authorInfor}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

        <div className={styles.content}>

        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
            placeholder="Deixe um comentário" />

            <footer>
                <button type="submit">Publicar</button>
            </footer>

        </form>

        <div className={styles.commentList}>
            <Comment />
             <Comment />
              <Comment />

        </div>
        </article>
    )
}