import dynamic from "next/dynamic";
import { Fragment } from "react";


const Layout = ({ children }: { children: any }) => {

    return (
        <Fragment>
            {children}
        </Fragment>
    );
};
export default Layout;
