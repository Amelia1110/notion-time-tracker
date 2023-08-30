import { TagItem } from "./tagList";
import { tags } from "./tagList";

export interface TimeEntry {
    task: string;
    time: Date;
    date: Date;
    tag: TagItem;
}

export const entries: TimeEntry[] = [
    {task: "Practice problems", time: new Date(), date: new Date(), tag: tags['Calc']},
    {task: "Macbeth essay", time: new Date(), date: new Date(), tag: tags['English']},
    {task: "Another essay", time: new Date(), date: new Date(), tag: tags['English']},
    {task: "Titration lab", time: new Date(), date: new Date(), tag: tags['Chem']},
    {task: "Forces practice", time: new Date(), date: new Date(), tag: tags['Physics']},
]