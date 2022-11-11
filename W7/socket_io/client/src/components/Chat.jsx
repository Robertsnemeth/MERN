import { useState, useEffect } from 'react'
import io from 'socket.io-client';

const Chat = () => {

    const [ socket ] = useState(() => io(':8000'));

    useEffect(() => {

        console.log("Is this running?");
        socket.on("Welcome", data => console.log(data));

        return () => socket.disconnect(true);

    }, []);

  return (
    <div>Chat and socket test</div>
  )
}

export default Chat