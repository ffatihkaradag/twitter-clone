import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__ImageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
