import { ObjectId } from "mongodb";

type RectType = {
    startX: number,
    startY: number,
    width: number,
    height: number,
    updatedRect: boolean
}

export type ChapterType = {
    name: string,
    start: number,
    end: number,
    rect: RectType,
    id: number
}

export default interface ChapterList {
    _id?: ObjectId,
    ownerId: ObjectId,
    curMaxID: number,
    chapters: ChapterType[]
}