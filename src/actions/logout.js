import { redirect } from "react-router-dom";


// helpers
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction() {
        // Delete the user
        deleteItem({
            key: "userName"
        })
        deleteItem({
            key: "budgets"
        })
        deleteItem({
            key: "expenses"
        })
     toast.success("You've deleted your account!")

    // Return redirect
    return redirect("/")
}


