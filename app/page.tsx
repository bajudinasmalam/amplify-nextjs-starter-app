import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Daftar Sekarang Juga&nbsp;
          <code className={styles.code}>Cari Kami Di Google ketik "COBLOS4D"</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <span></br></span>
        <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://heylink.me/.coblos4d/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            BONUS NEW MEMBER 100% <span>-&gt;</span>
          </h2>
          <p>slot77, judi slot triofus, indoslot, jpslot, live hongkong, data hk, live draw hk tercepat,</p>
        </a>

        <a
          href="https://heylink.me/.coblos4d/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Pilihan Game Lengkap <span>-&gt;</span>
          </h2>
          <p>slot online, judi338, hoki188, situs deposit dana 10k, slot anti rungkat, slot pragmatic, infini88, </p>
        </a>

        <a
          href="https://heylink.me/.coblos4d/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            CS ONLINE 24 JAM <span>-&gt;</span>
          </h2>
          <p>bomslot, hoki55, slot dana gratis, dana saldo gratis, slot dana tanpa potongan, keluaran sgp hari ini, </p>
        </a>

        <a
          href="https://heylink.me/.coblos4d/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            TOGEL PASTI BAYAR <span>-&gt;</span>
          </h2>
          <p>
            keluaran sdy hari ini, keluaran hk hari ini, prediksi togel apa besok, 
          </p>
        </a>
      </div>
    </main>
  )
}
