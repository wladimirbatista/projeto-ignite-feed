import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/SideBar';
import { posts_data } from './data/posts_data';

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts_data.map((post) => 
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )}
        </main>
      </div>
    </>
  )
}
