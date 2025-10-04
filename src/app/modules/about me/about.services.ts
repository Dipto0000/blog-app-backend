import { IAbout } from "./about.interface"
import { About } from "./about.model"


const createAboutInfo = async (payload: Partial<IAbout>) => {

    const aboutInfo = await About.create(payload)

    return aboutInfo

}

const getAboutInfo = async () => {

    const aboutInfo = await About.find();

    return aboutInfo
}

export const AboutService = {
    createAboutInfo,
    getAboutInfo
}