export type Menu = {
    title: string
    tips: string
    onClick: () => Promise<any>
}

export type EcExtension = {
    registerMenu: (menu: Menu) => Promise<boolean>
}

declare global {
    interface Window {
        EcExtension: EcExtension
    }
}
