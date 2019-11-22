import React from 'react'

class Link extends React.Component {
    render() {
        return (
            <a
                className="App-link"
                href="https://www.reddit.com/search/?q=nsfw"
                target="_blank"
                rel="noopener noreferrer"
            >
                Click for free NSFW
            </a>
        )
    }
}

export default Link;