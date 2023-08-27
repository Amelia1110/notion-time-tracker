import { useState } from "react";
import Tab from "../components/Tab";

export default function NavBar() {
    const [tabState, setTabState] = useState("Track");

    const switchTab = (tab: any) => {
        setTabState(tab)
    }

    return (
        <header className="h-8">
            <div className="flex flex-row gap-1 m-1 h-full">
                <Tab tabName="Track" onTabClick={() => switchTab("Track")} tabState={tabState}></Tab>
                <Tab tabName="Overview" onTabClick={() => switchTab("Overview")} tabState={tabState}></Tab>
            </div>
            <hr className="border-black"/>
        </header>
    )
}