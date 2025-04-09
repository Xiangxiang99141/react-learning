import React, { useState } from "react";
import { Form, InputGroup, Table } from "react-bootstrap";
function Settlement() {
    const [itemCount,setItemCount] = useState(1);
    const [foodPrice,setFoodPrice] = useState(0);
    const [insurancePrice,setInsurancePrice] = useState(0);
    const [printPrice,setPrintPrice] = useState(0);
    const [materialPrice,setMaterialPrice] = useState(0);
    const [sitePrice,setSitePrice] = useState(0);
    function updateFoodPrice(){
      const school = document.getElementById("foodSchool")
      const club = document.getElementById("foodClud")
      const sett = document.getElementById("foodSett")
      // console.log(school.value)
      if(school.value != null || club.value != null || sett.value != null){
        setFoodPrice(parseInt(school.value)+parseInt(club.value)-parseInt(sett.value));
      }
    }
    function updateInsurancePrice(){
      const school = document.getElementById("insSchool")
      const club = document.getElementById("insClub")
      const sett = document.getElementById("insSett")
      if(school.value != null || club.value != null || sett.value != null){
        setInsurancePrice(parseInt(school.value)+parseInt(club.value)-parseInt(sett.value));
      }
    }
    function updateMaterialPrice(){
      const school = document.getElementById("materialSchool")
      const club = document.getElementById("materialClub")
      const sett = document.getElementById("materialSett")
      if(school.value != null || club.value != null || sett.value != null){
        setMaterialPrice(parseInt(school.value)+parseInt(club.value)-parseInt(sett.value));
      }
    }

    function updatePrintPrice(){
      const school = document.getElementById("printSchool")
      const club = document.getElementById("printClub")
      const sett = document.getElementById("printSett")
      if(school.value != null || club.value != null || sett.value != null){
        setPrintPrice(parseInt(school.value)+parseInt(club.value)-parseInt(sett.value));
      }
    }

    function updateSitePrice(){
      const school = document.getElementById("siteSchool")
      const club = document.getElementById("siteClub")
      const sett = document.getElementById("siteSett")
      if(school.value != null || club.value != null || sett.value != null){
        setSitePrice(parseInt(school.value)+parseInt(club.value)-parseInt(sett.value));
      }
    }
    
    return (
        <>
          <h1>結算表</h1>
          <Form>
            <Table bordered hover className="text-center">
              <thead>
                <tr className="align-middle">
                  <th>#</th>
                  <th key="項目">項目</th>
                  <th key="學校支應">學校支應</th>
                  <th key="社團自籌">社團自籌</th>
                  <th key="結算金額">結算金額</th>
                  <th key="餘絀">餘絀</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>1</td>
                  <td key="膳食">膳食</td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="foodSchool" type="number" onChange={updateFoodPrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="foodClud" type="number" onChange={updateFoodPrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="foodSett" type="number" onChange={updateFoodPrice}></input>
                  </td>
                  <td>
                    {foodPrice}
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>2</td>
                  <td key="保險">保險</td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} type="number" id="insSchool" onChange={updateInsurancePrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} type="number" id="insClub" onChange={updateInsurancePrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} type="number" id="insSett" onChange={updateInsurancePrice}></input>
                  </td>
                  <td>
                    {insurancePrice}
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>3</td>
                  <td key="印刷">印刷</td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="printSchool" type="number" onChange={updatePrintPrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="printClub" type="number" onChange={updatePrintPrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="printSett" type="number" onChange={updatePrintPrice}></input>
                  </td>
                  <td>
                    {printPrice}
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>4</td>
                  <td key="材料">材料</td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="materialSchool" type="number" onChange={updateMaterialPrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="materialClub" type="number" onChange={updateMaterialPrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="materialSett" type="number" onChange={updateMaterialPrice}></input>
                  </td>
                  <td>
                    {materialPrice}
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>5</td>
                  <td key="場地">場地</td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="siteSchool" type="number" onChange={updateSitePrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="siteClub" type="number" onChange={updateSitePrice}></input>
                  </td>
                  <td>
                    <input className="form-control" min={0} defaultValue={0} id="siteSett" type="number" onChange={updateSitePrice}></input>
                  </td>
                  <td>
                    {sitePrice}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="align-middle">
                  <td colSpan={2}>總額</td>
                  <td key="schoolTotal">{}</td>
                  <td key="clubTotal">{}</td>
                  <td key="total">{}</td>
                  <td key="餘絀">{foodPrice+insurancePrice+printPrice+materialPrice+sitePrice}</td>  
                </tr>
              </tfoot>
            </Table>
          </Form>
        </>
    );
}

export default Settlement;