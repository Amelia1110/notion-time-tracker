import Tab from "../components/Tab";

interface Props {
    setTabState: any;
    tabState: string;
}

export default function NavBar({setTabState, tabState}: Props) {
    const switchTab = (tab: string) => {
        setTabState(tab)
    }

    return (
        <>
            <header className="h-8 m-1">
                <div className="flex flex-row gap-1 h-full">
                    <Tab tabName="Track" onTabClick={() => switchTab("Track")} tabState={tabState}></Tab>
                    <Tab tabName="History" onTabClick={() => switchTab("History")} tabState={tabState}></Tab>
                    <Tab tabName="Overview" onTabClick={() => switchTab("Overview")} tabState={tabState}></Tab>
                </div>
            </header>
            <hr className="border-black"/>
        </>
    )
}