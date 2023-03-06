import CharacterList from '../../features/characters/CharacterList/CharacterList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Star Wars</h1>
      <CharacterList />
    </>
  );
};

export default Home;
