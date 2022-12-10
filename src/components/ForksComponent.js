
import { useState } from "react"

import { Octokit } from "octokit";

import"../styles/forkscomponent.css"

const ForksComponent = (props) => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [accountData, setAccountData] = useState(null)


    async function getAccountsData(){
        const octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_AUTH
          })
          
        let response = await octokit.request(`GET /gists/${props.id}/forks`, {})
        response = response.data
    
        console.log(response)
        console.log(response.length - 3 )
        console.log(response.length)
        let tempAccountData = []
        // Accounts come in chronological order, so we take the las 3 elements of the array 
        for(let index=response.length - 3;  index <= response.length - 1; index++){
            tempAccountData.push({
                avatar_url:response[index].owner.avatar_url,
                username:response[index].owner.login
            })
            console.log({avatar_url:response[index].owner.avatar_url})

        }
        console.log(tempAccountData)
        console.log("her?")

        // tempAccountData.map((account, idx) => {
        //        console.log(account.avatar_url)
        //    })

    
        setAccountData(<>
            <div className="profile-image-container">
                {tempAccountData.map((account, idx) => {
                return<>
                   <a href={"https://gist.github.com/"+account.username}  target="_blank"> <img src={account.avatar_url} className="profile-image" href="dd"/> </a>
                </>   
                })}
            </div>
        </>)
    }

    return <>
    
    <button
    onClick={ () => {setButtonClicked(!buttonClicked);getAccountsData() }}
    >view forks</button>
    
    <div className="line-break"></div>
    {buttonClicked?accountData:""}


    </>

}


export default ForksComponent

