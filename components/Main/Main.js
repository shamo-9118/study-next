import styles from '../Main/Main.module.css'
import { Links } from '../Links/Links'
import { Headline } from '../Headline/Headline'

export function Main(props) {
  return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>Pages/{props.page}.js</code>
        </Headline>
        <Links/>
      </main>
  )
}