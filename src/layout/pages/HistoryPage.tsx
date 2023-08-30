import { Col, Row } from "antd";
import { EditOutlined, FieldTimeOutlined, SnippetsOutlined, TagOutlined } from "@ant-design/icons";
import { entries } from "../../components/objects/entryList";
import TimeEntryRow from "../../components/TimeEntryRow";

export default function HistoryPage() {
    return (
        <div>
            <Row className="bg-zinc-100">
                <Col span={4} className="px-3 py-1 antd-header flex gap-1"><FieldTimeOutlined />Time</Col>
                <Col span={10} className="px-3 py-1 antd-header flex gap-1"><EditOutlined />Task</Col>
                <Col span={5} className="px-3 py-1 antd-header flex gap-1"><SnippetsOutlined />Date</Col>
                <Col span={5} className="px-3 py-1 antd-header flex gap-1"><TagOutlined />Tag</Col>
            </Row>
            {entries.map(entry => (
                <TimeEntryRow entry={entry}/>
            ))}
            
        </div>
    )
}