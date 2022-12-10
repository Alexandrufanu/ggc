import { useState, useEffect } from "react"

import "../styles/gist.css"

import axios from 'axios';

const Gist = (props) => {

    const {data} = props

    const [listOfFileTypes, setListOfFileTypes] = useState([])

    const [expandClicked, setExpandClicked] = useState(false)

    const [gistData, setGistData] = useState(null)

    function updateTypes()
    {
      let listOfFileTypesTemp = []
      for (let file in data.files){
        listOfFileTypesTemp.push(file.split('.').pop());
    }
    
    setListOfFileTypes(listOfFileTypesTemp)
  }

  useEffect( ()=>{
    updateTypes()
    }
    ,[data]
  )


  async function clickSubtitle(){
    setExpandClicked(!expandClicked)

    let gistsContentList = []

    for (let file in data.files){
      console.log(file)
      console.log(data.files[file].raw_url);

      let filename = file
      let fileContent = await axios.get(data.files[file].raw_url)
      fileContent = fileContent.data

      gistsContentList.push({
            filename:filename,
            fileContent:fileContent

          }
      )

    }

    setGistData (<>
      {gistsContentList.map((gist, idx) =>{
        return <div key={idx} style={{ whiteSpace: "pre" }}>
          <h2 >{gist.filename}</h2>
          {gist.fileContent}
        </div>
      })}
    </>)


  }

    return <>
    <div
    className="gist-container"
    >
      <a
      className="gist-description"
      onClick={clickSubtitle}
      >{data.description!==""?data.description:"Unnamed Gist"}</a>

      {listOfFileTypes.map((fileType, idx ) => <div className="file-type" key={idx}> {fileType} </div>)}

      <div className="line-break"></div>
      {expandClicked?<div>{gistData}</div>:""}

    </div>

    </>

}


export default Gist