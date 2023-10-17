import s from './mainLayout.module.css'

export default function MainLayout(props: { children: JSX.Element }) {

  return <div className={s.out} style={{height:"calc(100vh - var(--vh-offset, 0px))"}}>
    <div className={s.mainarea}>
      {props.children}
    </div>
  </div>
}
