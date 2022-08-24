import styles from './App.module.css';
import {Countdown} from '../Countdown'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Countdown</h1>
      </header>
      <div>
        <Countdown date='2020-12-24T00:00:00' />,
      </div>
    </div>
  );
}

export default App;
