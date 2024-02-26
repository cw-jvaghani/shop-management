import {NavLink} from "react-router-dom"
import classes from './MainNavigation.module.css'
export default function MainNavigation(){
    return<header className={classes.header}>
        <nav>
            <ul className={classes.list}>
             <NavLink to="/products" className={({isActive})=> isActive ? classes.active : ''} end>Products</NavLink>
             <NavLink to="/metrics" className={({isActive})=> isActive ? classes.active : ''}>Metrics</NavLink>
            </ul>
        </nav>
    </header>
}