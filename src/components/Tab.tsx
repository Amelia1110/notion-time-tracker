import { ClockCircleOutlined } from '@ant-design/icons';
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
        
    }

    if (tabName === tabState) {
        return (
            <button className="bg-gray-200 h-full py-1 px-2 font-serif rounded-md flex flex-row items-center gap-1" onClick={onTabClick}>
                {icon()}
                <p>{tabName}</p>
            </button>
        )
    } else {
        return (
            <button className="h-full py-1 px-2 font-serif rounded-md flex flex-row items-center gap-1" onClick={onTabClick}>
                {icon()}
                <p>{tabName}</p>
            </button>
        )
    }
}