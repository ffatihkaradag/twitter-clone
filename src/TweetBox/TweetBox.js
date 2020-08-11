import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from '../firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'John Doe',
      username: 'johndoe',
      verified: true,
      text: tweetMessage,
      avatar:
        'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
    })

    setTweetMessage('')
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
