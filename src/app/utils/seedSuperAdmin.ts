import { envVars } from "../config/env";
import { IUser } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import bcryptjs from "bcryptjs";


export const seedSuperAdmin = async () => {

    try {
        const isSuperAdminExist = await User.findOne({ email: envVars.SUPER_ADMIN_EMAIL });

        if (isSuperAdminExist) {
            console.log("Super admin already exists");
            return
        }
   
        console.log("Trying to create super admin");

        const hashedPassword = await bcryptjs.hash(envVars.SUPER_ADMIN_PASSWORD, Number(envVars.SALT_ROUNDS));

        const payload: IUser = {
            email: envVars.SUPER_ADMIN_EMAIL,
            password: hashedPassword
        }

        const superAdmin = await User.create(payload);
        console.log("Super admin created successfully! \n");
        console.log(superAdmin);



    } catch (error) {
        console.log(error);
        
    }
}