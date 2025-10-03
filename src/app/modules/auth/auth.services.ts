import { createNewAccessTokenWithRefreshToken, createUserTokens } from "../../utils/generateTokens";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcryptjs from "bcryptjs";

const credentialsLogin = async (payload: Partial<IUser>) => {

    const { email, password } = payload
    
    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
        throw new Error("User does not exist");
    }

    const isPasswordMatch = await bcryptjs.compare(password as string, isUserExist?.password as string);

    if(!isPasswordMatch) {
        throw new Error("Invalid username or password");
    }

    const userTokens = createUserTokens(isUserExist);
    
    const { password: pass, ...rest } = isUserExist.toObject();
    

    return {
        accessToken: userTokens.accessToken,
        refreshToken: userTokens.refreshToken,
        user: rest
    }
}


const getNewAccessToken = async (refreshToken: string) => {
    const newAccessToken = await createNewAccessTokenWithRefreshToken(refreshToken);

    return {
        accessToken: newAccessToken
    }
}



export const AuthService = {
    credentialsLogin,
    getNewAccessToken
}