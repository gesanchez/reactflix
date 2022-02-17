import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header-component']}>
      <h1 className={`text-7xl text-center ${styles['header-component__title']}`}>
        <em>React</em>
        <em className="text-red-700">flix</em>
      </h1>
    </header>
  );
}

export default Header;