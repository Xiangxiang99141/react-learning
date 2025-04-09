import { Route,useLocation,useRoutes } from "react-router-dom";
import { Nav,NavDropdown } from "react-bootstrap";
const Site = {
    // Router : (site)=>{
    //     const childrenRoute = site.children.map((child) => {
    //         return({
    //             path : child.path,
    //             element : child.element
    //         })
    //     });
    //     const parentRoute = [{
    //         path : site.path,
    //         element : site.element,
    //         children : childrenRoute
    //     }];
    //     return(useRoutes(parentRoute));
    // },
    navigation:(site)=>{
        const location = useLocation();
        return(
            // <Nav variant="tabs" defaultActiveKey={site[0].path} as="ul" >
            <Nav fill variant="tabs" defaultActiveKey={location.pathname} as="ul" >
                {  site[0].children.map((child) => {
                        return(
                            <Nav.Item key={child.name} as="li">
                                <Nav.Link href={child.fullpath}>{child.name}</Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
        )
    },
    getHeader:(sites)=>{
        const navList = sites.map((site)=>{
            // console.log("site",site.children.length);
            // return(
            //判斷需不需要Dropdown
            if(site.children){
                return(
                    <NavDropdown title={site.name} id="basic-nav-dropdown" key={site.name}>
                        <NavDropdown.Item href={site.children[0].fullpath} key={site.children[0].name}>{site.children[0].name}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {getChildren(site.children)}
                        <NavDropdown.Item>
                            持續增加中...
                        </NavDropdown.Item>
                    </NavDropdown>
                )
            }
            else{
                return(
                    <Nav.Link key={site.name} href={site.fullpath}>{site.name}</Nav.Link>
                )
            }
            // )
            
        });
        return navList;
    }
}

function getChildren(children){
    for(let i=1;i<children.length;i++){
        return(
            <NavDropdown.Item href={children[i].fullpath}>{children[i].name}</NavDropdown.Item>
        )
    }
}


export default Site;