import { ReactElement } from "react";

export type PagesChildLinks = {
    icon?: ReactElement<ReactElement>;
    name: string;
    parent?: string;
    path?: string;
}


export type PagesLinksParentLinks = Omit<PagesChildLinks, 'parent'> & {
    children?: PagesChildLinks[];
    active: boolean;
}
