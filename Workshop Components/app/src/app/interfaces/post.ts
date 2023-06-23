import { IThemeId } from "./themeId";
import { IUser } from "./user";

export interface IPost {
    likes: string[];
    _id: string;
    text: string;
    userId: IUser;
    themeId: IThemeId;
    created_at: string;
    updatedAt: string;
    __v: number;
}