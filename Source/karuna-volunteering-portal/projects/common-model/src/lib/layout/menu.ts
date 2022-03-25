export interface MainMenu {
    id: number;
    name: string;
    isActive: boolean;
    sMenu: SubMenu[];
}

export interface SubMenu {
    id: number;
    name: string;
    loc: string
    isActive: boolean;
}

export const menus: MainMenu[] = [
    {
        id: 1,
        name: "Activities",
        sMenu: [
            { id: 1, name: "FundRaising", loc: "/fund-raising", isActive: true },
            { id: 2, name: "CottonBall", loc: "/cotton-ball", isActive: true },
            { id: 3, name: "Art&Craft", loc: "/page-in-progress", isActive: true },
        ],
        isActive: true
    },
    {
        id: 2,
        name: "Spread the Word",
        sMenu: [
            { id: 1, name: "Create Awareness - Blog", loc: "/page-in-progress", isActive: true },
            { id: 2, name: "Create Awareness - Articles", loc: "/page-in-progress", isActive: true },
            { id: 3, name: "Social Media", loc: "/page-in-progress", isActive: true },
        ],
        isActive: true
    }
]