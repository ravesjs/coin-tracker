import React from 'react'
import styles from '@/pages/Layout/Layout.module.scss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = (props: any) => {
  const { children } = props
  return (
    <table>
      <colgroup>
        <col style={{width: '20px', minWidth: 'auto', maxWidth: 'auto'}}/>
        <col style={{width: '20px', minWidth: 'auto', maxWidth: 'auto'}}/>
        <col style={{width: '20px', minWidth: 'auto', maxWidth: 'auto'}}/>
      </colgroup>
      <thead className={styles.marginUp}>
        <tr>
          <th></th>
          <th><h2>#</h2></th>
          <th></th>
          <th>
            <h2>
              Name
            </h2>
          </th>
          <th>
            <h2>Price</h2>
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
export default Layout
