import styles from "./Sidebar.module.css";
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt="Imagem de perfil"
      />

      <div className={styles.profile}>
        <Avatar imagem="https://github.com/wladimirbatista.png"/>
        <strong>Wladimir Batista</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil</a>
      </footer>
    </aside>
  );
}
