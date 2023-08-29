export interface Tag {
    name: string;
    colour: string;
}

interface tagList {
    [key: string]: Tag;
}

export const tags: tagList = {
    'English': {name: "English", colour: "orange"},
    'Calc': {name: "Calc", colour: "red"},
    'Physics': {name: "Physics", colour: "blue"},
    'Chem': {name: "Chem", colour: "green"},
}