import { useState, useEffect } from "react"

import "../styles/gist.css"

const Gist = (props) => {

    const {data} = props

    const [listOfFileTypes, setListOfFileTypes] = useState([])

    let printTest = <></>
    function updateTypes()
    {
    let listOfFileTypesTemp = []
    for (let file in data.files){
      console.log(file)
      listOfFileTypesTemp.push(file.split('.').pop());
    }
    console.log(listOfFileTypesTemp)
    
    printTest = <>A</>
    setListOfFileTypes(listOfFileTypesTemp)
  }

  useEffect( ()=>{
    updateTypes()
  }

    ,[data]
  )

    return <>

    <div
    className="gist-container"
    
    >
      
      <div
      className="gist-description"
      >{data.description!==""?data.description:"Unnamed Gist"}</div>

      {listOfFileTypes.map((fileType ) => <div className="file-type" > {fileType} </div>)}

      {printTest}


    </div>
    

    </>

}


export default Gist