import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {

    function handleDeleteComment() { 
     onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://cdn3d.iconscout.com/3d/premium/thumb/programmer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-coding-programming-profession-avatar-pack-people-icons-7675299.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Maio às 08:13" datetime="2022-05-11 08:13:30">Cerca de 1hr atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>
                <footer>
                    <button>
                     <ThumbsUp />
                     Aplaudir <span>20</span>   
                    </button>
                </footer>
            </div>
        </div>
    )
}