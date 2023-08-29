import { Col, Row } from "antd";
import TimeEntry from "../../components/TimeEntry";
import { EditOutlined, FieldTimeOutlined, SnippetsOutlined, TagOutlined } from "@ant-design/icons";

export default function HistoryPage() {
    return (
        <div>
            <Row className="px-3 py-1 bg-zinc-100">
                <Col span={4} className="antd-header flex gap-1"><FieldTimeOutlined />Time</Col>
                <Col span={10} className="antd-header flex gap-1"><EditOutlined />Task</Col>
                <Col span={5} className="antd-header flex gap-1"><SnippetsOutlined />Date</Col>
                <Col span={5} className="antd-header flex gap-1"><TagOutlined />Tag</Col>
            </Row>
            <TimeEntry/>
        </div>
    )
}