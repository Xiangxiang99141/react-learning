import React from "react";
import { Outlet } from "react-router-dom";
import Tools from "../router/Tools";
import Site from "../config/SiteRouter";
function ToolsLayout(){
    return(
        <>
            {Site.navigation(Tools)}
            <Outlet />
        </>
    )
}

export default ToolsLayout;

