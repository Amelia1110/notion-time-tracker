import { Col, Row} from "antd";
import { TimeEntry } from "./objects/entryList";
import Tag from "./Tag";

interface Props {
    entry: TimeEntry;
}

export default function TimeEntryRow({entry}: Props) {
    return (
        <Row>
            <Col span={4} className="antd-amiri py-1 px-3 border border-t-0 border-x-0 border-zinc-200">
                {entry.time.toTimeString().slice(0, 8)}
            </Col>
            <Col span={10} className="antd-amiri py-1 px-3 border border-t-0 border-r-0 border-zinc-200">
                {entry.task}
            </Col>
            <Col span={5} className="antd-amiri py-1 px-3 border border-t-0 border-r-0 border-zinc-200">
                {entry.date.toISOString().split('T')[0]}
            </Col>
            <Col span={5} className="antd-amiri py-1 px-3 border border-t-0 border-r-0 border-zinc-200">
               <Tag entry={entry}/>
            </Col>
        </Row>
    )
}