import React from "react";
import { Outlet } from "react-router-dom";
import Site from "../config/SiteRouter";
import ComponentsRouter from "../router/ComponentsRouter";
function ToolsLayout(){
    return(
        <>
            {Site.navigation(ComponentsRouter)}
            <Outlet />
        </>
    )
}

export default ToolsLayout;

