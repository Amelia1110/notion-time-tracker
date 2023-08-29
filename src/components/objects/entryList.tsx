import { Tag } from "./tagList";
import { tags } from "./tagList";

export interface TimeEntry {
    task: string;
    time: number;
    date: Date;
    tag: Tag;
}

export const ENTRIES = [
    {task: "Practice problems", time: 1200, date: new Date(), tag: tags['Calc']},
    {task: "Macbeth essay", time: 1600, date: new Date(), tag: tags['English']},
    {task: "Another essay", time: 1300, date: new Date(), tag: tags['English']},
    {task: "Titration lab", time: 1900, date: new Date(), tag: tags['Chem']},
    {task: "Forces practice", time: 1200, date: new Date(), tag: tags['Physics']},
]