import { TimeEntry } from "./objects/entryList";

interface Props {
    entry: TimeEntry;
}

export default function Tag({entry}: Props) {
    return (
        <div className={`bg-${entry.tag.colour}-200`}>
            {entry.tag.name}
        </div>
    )
}