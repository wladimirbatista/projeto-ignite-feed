import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, imagem }) {

  return(
    <>
      <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={imagem} alt="Imagem de perfil" />
    </>
  )
}