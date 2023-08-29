import { ClockCircleOutlined, HistoryOutlined } from '@ant-design/icons';
import { CalendarOutlined } from '@ant-design/icons';

interface Props {
    tabName: string;
    onTabClick: () => void;
    tabState: string;
}

export default function Tab({tabName, onTabClick, tabState}: Props) {
    const icon = () => {
        if (tabName === "Track") {
            return (
                <ClockCircleOutlined/>
            )
        }
        if (tabName === "Overview") {
            return (
                <CalendarOutlined/>
            )
        }
        if (tabName === "History") {
            return (
                <HistoryOutlined/>
            )
        }
        
    }

    if (tabName === tabState) {
        return (
            <button className="bg-gray-200 h-full px-2 font-serif rounded-md flex flex-row items-center gap-1.5" onClick={onTabClick}>
                {icon()}
                <p className="mt-0.5">{tabName}</p>
            </button>
        )
    } else {
        return (
            <button className="h-full px-2 font-serif rounded-md flex flex-row items-center gap-1.5 hover:bg-gray-100" onClick={onTabClick}>
                {icon()}
                <p className="mt-0.5">{tabName}</p>
            </button>
        )
    }
}