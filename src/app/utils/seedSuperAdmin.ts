import { IUser } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import bcryptjs from "bcryptjs";


export const seedSuperAdmin = async () => {

    try {
        const isSuperAdminExist = await User.findOne({ email: process.env.SUPER_ADMIN_EMAIL });

        if (isSuperAdminExist) {
            console.log("Super admin already exists");
            return
        }
   
        console.log("Trying to create super admin");

        const hashedPassword = await bcryptjs.hash(process.env.SUPER_ADMIN_PASSWORD as string, 10);

        const payload: IUser = {
            email: process.env.SUPER_ADMIN_EMAIL as string,
            password: hashedPassword
        }

        const superAdmin = await User.create(payload);
        console.log("Super admin created successfully! \n");
        console.log(superAdmin);



    } catch (error) {
        console.log(error);
        
    }
}