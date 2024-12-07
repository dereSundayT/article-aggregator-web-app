import {ModalWrapper} from "../../../component";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/redux/store";
import {handleLogoutModal} from "../../../config/redux/user/userSlice";


export const Logout = () => {
    const {showLogoutModal} = useSelector((state:RootState)=>state.user)
    const dispatch = useDispatch<AppDispatch>()

    const handleLogout = () => {
        dispatch(handleLogoutModal())
    }
    return(
        <ModalWrapper setModal={handleLogout} modalTitle={"Logout"} isOpen={showLogoutModal} >
            <div>
                <p>Are you sure you want to logout?</p>
            </div>
        </ModalWrapper>
    )
}