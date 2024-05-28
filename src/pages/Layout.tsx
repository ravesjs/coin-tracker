import React from 'react'
import styles from '@/components/Coins/Coins.module.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = (props: any) => {
  const { children } = props
  return (
    <table>
      <thead className={styles.marginUp}>
        <tr className={styles.wrap}>
          <th>
            <h2>
              <i>#</i>Name
            </h2>
          </th>
          <th>
            <h2>Price</h2>
          </th>
        </tr>
      </thead>
      <tbody className={styles.container}>{children}</tbody>
    </table>
  )
}
export default Layout
