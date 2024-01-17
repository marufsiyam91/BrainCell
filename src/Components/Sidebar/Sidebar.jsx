import SidebarContent from '../SidebarContent/SidebarContent'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar_wrapper}>
          <div className={styles.sidebar_container}>
               <SidebarContent/>
          </div>
    </div>
  )
}

export default Sidebar
