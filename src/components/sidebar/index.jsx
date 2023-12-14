import React from "react";
import {
    ArrowUpIcon,
    BellIcon,
    ChartBarIcon,
    CreditCardIcon,
    DocumentSearchIcon,
    ExternalLinkIcon,
    HomeIcon,
    MailIcon,
} from "@heroicons/react/solid";

function Sidebar() {
    return (
        <div className="bg-sidebar flex-none w-14 sm:w-20 h-100">
            <div className="h-20 items-center flex">
                <HomeIcon
                    width={40}
                    className="text-gray-300 left-3 sm:left-6 fixed"
                />
            </div>
            <div className="fixed left-3 sm:left-6 top-[100px]">
                <ChartBarIcon
                    width={40}
                    className=" bg-iconbg  p-2 rounded-lg mb-4 text-gray-300"
                />
                <DocumentSearchIcon
                    width={40}
                    className=" bg-iconbg  p-2 rounded-lg mb-4 text-gray-300"
                />
                <MailIcon
                    width={40}
                    className=" bg-iconbg  p-2 rounded-lg mb-4 text-gray-300"
                />
                <CreditCardIcon
                    width={40}
                    className=" bg-iconbg  p-2 rounded-lg mb-4 text-gray-300"
                />
                <BellIcon
                    width={40}
                    className=" bg-iconbg  p-2 rounded-lg mb-4 text-gray-300"
                />
            </div>
            <div className="fixed bottom-4 left-3 sm:left-6">
                <a href="#top">
                    <ArrowUpIcon
                        width={40}
                        className=" bg-iconbg  p-2 rounded-lg mb-4 text-gray-300"
                    />
                </a>
                <ExternalLinkIcon
                    width={40}
                    className=" bg-iconbg  p-2 rounded-lg mb-4 text-gray-300"
                />
            </div>
        </div>
    );
}

export default Sidebar;
