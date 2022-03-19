import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";




const Home = () => {
    const navigate = useNavigate();
     const [roomId, setRoomId] = useState("");
      const [username, setUsername] = useState("");

    const creatNewRoom = (e) => {
      e.preventDefault();
        const id = uuidV4();
        // console.log(id);
        setRoomId(id);
        toast.success("Created a new room");
    }



    const joinRoom = (e) => {
    
      if(!roomId || !username) {
        toast.error("Please enter a room id and username");
        return;
      }
      // toast.success("Joined the room");
      //redirect to the editor page
      navigate(`/editor/${roomId}`, {
        state: {
          username,
        },
      });
    }
    const handleInputEnter = (e) => {
      // console.log('event',e.code);
      if (e.code === "Enter") {
        joinRoom();
      }
    };


  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            value={roomId}
            onKeyUp={handleInputEnter}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            value={username}
            onKeyUp={handleInputEnter}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn" onClick={creatNewRoom}>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with💛&nbsp;by&nbsp;
          <a href="https://github.com/PrinceTyagia">Prince Tyagi</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
