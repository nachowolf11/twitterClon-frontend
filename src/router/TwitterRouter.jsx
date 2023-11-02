import { Navigate, Route, Routes } from "react-router-dom"
import { UserRoutes } from "../routes/UserRoutes"
import { LoadingPage } from "../ui"
import { LoginPage, PublicPage, UserPage } from "../pages"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"

export const TwitterRouter = () => {
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])
    

    if( status === 'checking' ){
        return (
            <LoadingPage/>
        )
    }
    
  return (

    <Routes>
        {
           ( status === 'not-authenticated' )
            ? (
                <>
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/" element={ <PublicPage /> } />
                    <Route path="/*" element={ <Navigate to="/login"/> }/>
                </>
            )
            :(
                <>
                    <Route path="/login" element={ <Navigate to="/home"/> }/>
                    <Route path="/" element={ <Navigate to="/home"/> }/>
                    <Route path="/*" element={ <UserRoutes /> } />
                </>
            )
        }
                    <Route path="/user/:username" element={ <UserPage /> } />
    </Routes>
  )
}
