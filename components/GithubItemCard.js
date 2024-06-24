// Card which when clicked redirects to the github repository 

import { SocialIcon } from "react-social-icons"

export default function GithubItemCard({url, displayName, description }){
    const ghPFP = "https://avatars.githubusercontent.com/u/43813132?v=4"

    return (
        <div className="github-item-card" onClick={() => window.open(url, "_blank")}>
            <div className="github-item-card-header">
                <img src={ghPFP} alt="Github Profile Picture" />
                <h2>{displayName}</h2>
            </div>
            <p>{description}</p>
            <SocialIcon url={url} target="_blank" rel="noreferrer noopener" />
        </div>
    )
    
    
}