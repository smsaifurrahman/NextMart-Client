import { Button } from "@/components/ui/button";
import CreateCategoryModal from "./CreateCategoryModal";


const ManageCategories = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold"> Manage Categories </h1>
            <CreateCategoryModal ></CreateCategoryModal>
            </div>
        </div>
    );
};

export default ManageCategories;