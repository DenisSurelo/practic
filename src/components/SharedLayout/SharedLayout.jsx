import {NavLink} from "react-router-dom"
import { Suspense } from "react"

export const SharedLayout  = () => {
    return(
        <div>
        <header>
            <nav>
        <NavLink to="/" end style={({ isActive}) => ({ color: isActive ? 'red' : 'blue'})}>
        Home
      </NavLink>
      <NavLink to="/tasks" end style={({ isActive}) => ({ color: isActive ? 'red' : 'blue'})}>
        Tasks
      </NavLink>
      <NavLink to="/login" end style={({ isActive}) => ({ color: isActive ? 'red' : 'blue'})}>
        LogIn
      </NavLink>
      <NavLink to="/register" end style={({ isActive}) => ({ color: isActive ? 'red' : 'blue'})}>
        Registration
      </NavLink>
            </nav>
        </header>


      <Suspense fallback= {<div>Loading...</div>}>
            <Outlet></Outlet>
        </Suspense>
    </div>
    )
}
