import React from 'react'
import styles from './Main.module.css'

const Main = (props) => {
    const {main, subs, ads, container} = styles;
    const {sub, ad} = props;
  return (
    <div className={main}>Main
        <div className={container}>
            <div className={subs}>{sub}s</div>
            <div className={subs}>{sub}s</div>
            <div className={subs}>{sub}s</div>
        </div>
        <div className={ads}>{ad}a</div>
    </div>
  )
}

export default Main