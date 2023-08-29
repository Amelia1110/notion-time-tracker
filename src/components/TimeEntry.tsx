import { Col, Row } from "antd";

export default function TimeEntry() {
    return (
        <Row>
            <Col span={4} className="antd-amiri py-1 px-3 border border-r-0 border-zinc-200">
                00:00:00
            </Col>
            <Col span={10} className="antd-amiri py-1 px-3 border border-r-0 border-zinc-200">
                Practice problems
            </Col>
            <Col span={5} className="antd-amiri py-1 px-3 border border-r-0 border-zinc-200">
                2023-08-29
            </Col>
            <Col span={5} className="antd-amiri py-1 px-3 border border-r-0 border-zinc-200">
                Physics
            </Col>
        </Row>
    )
}