import {ModalWrapper, Spinner} from "../../../component";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/redux/store";
import {handleLogoutModal} from "../../../config/redux/user/userSlice";
import {logoutUser} from "../../../config/redux/user/userAction";
import {Link} from "react-router-dom";


export const Logout = () => {
    const {showLogoutModal,token,isUserLoading} = useSelector((state:RootState)=>state.user)
    const dispatch = useDispatch<AppDispatch>()

    const handleLogoutRequest = () => {
        dispatch(logoutUser(token))
    }

    const closeModal = () => {
        dispatch(handleLogoutModal())
    }


    return(
        <ModalWrapper setModal={closeModal} modalTitle={"Logout"} isOpen={showLogoutModal} size={"small"} >
            <div>
                <p>Are you sure you want to logout?
                 <Link
                     onClick={() => handleLogoutRequest()}
                     className={"ml-1 text-sm text-indigo-700 underline" } to={"#0"}>Logout</Link>
                </p>

                {isUserLoading && <Spinner/>}

            </div>
        </ModalWrapper>
    )
}