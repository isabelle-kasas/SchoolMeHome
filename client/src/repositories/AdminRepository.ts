import {UserType} from "../components/dashboard/dashboard-admin/DashboardAdmin";
import {UserFormData} from "../components/dashboard/dashboard-admin/ModalAddNewUser/ModalAddNewUser";


export default class AdminRepository {

    addNewUser = (userFormData: UserFormData): Promise<String> | null => {
        return null
    }
}