import { useContext } from "react"
import { AuthContext } from "../context/auth"

const useAuth = () => {
    return {user, setUser} = useContext(AuthContext)
}

export default useAuth