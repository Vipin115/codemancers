import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
export const File = () => {
  const [post, setPost] = useState("");
  const [enterd_gif, setEnterd_gif] = useState("");
  const [gifdata, setGifdata] = useState([]);
  const [displaydata, setDisplaydata] = useState([]);

  useEffect(() => {
    getgifdata();
   
  }, [enterd_gif]);
  const random = () => {
    axios
      .get(
        `https://api.giphy.com/v1/stickers/trending?api_key=nr8XmV69fFVJyrtLemHNFEfcRo93yOMY&limit=6`
      )
      .then((res) => setGifdata(res.data.data));
  };
  const getgifdata = () => {
    if (!enterd_gif) return;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=nr8XmV69fFVJyrtLemHNFEfcRo93yOMY&q=${enterd_gif}&limit=15`
      )
      .then((res) => setGifdata(res.data.data));
  };
  const clear = (e) => {
    if (e.key === "Backspace") {
      setGifdata([]);
    }
  };
  console.log(displaydata, "displaydata");
  return (
    <div className="main_div">
      <div className="app_name">
        <h2>facebook ui</h2>
      </div>
      <div className="second_container">
        <div className="personal_details_div">
          <img className="profile_pic" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
          <p>Name</p>
          
        </div>
        <div className="post_div">
          <div className="post_input_div">
            <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
            <input
              value={post}
              onChange={(e) => setPost(e.target.value)}
              type="text"
              placeholder="Write something here..."
            />
          </div>
          <div className="buttons_div">
            
            <div className="buttons_inside_div">
              <button>
                <img
                  src="https://www.pinpng.com/pngs/m/240-2407826_clipart-tag-friends-icon-hd-png-download.png"
                  width={"10px"}
                  height={"10px"}
                  alt="friends"
                />{" "}
                Tag friend
              </button>
              <button>
                <img
                  src="data:image/png;base64,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"
                  width={"15px"}
                  height={"10px"}
                  alt="location"
                />
                Check in
              </button>
              <button
                onClick={() =>
                  (document.getElementsByClassName("modal")[0].style.display =
                    "block")(random())
                }
              >
                <img
                  style={{ marginRight: "5px" }}
                  src="https://img.favpng.com/4/6/18/gif-portable-network-graphics-logo-computer-icons-macos-png-favpng-mLh5qMH4s5yYAyHxuCDLDmJfR.jpg"
                  width={"15px"}
                  height={"10px"}
                  alt=" gif"
                />
                Gif
              </button>
              <button>
                <img
                  src="https://www.pngall.com/wp-content/uploads/2016/10/Calendar-PNG-Image.png"
                  width={"15px"}
                  height={"10px"}
                  alt=" calendar"
                />
                Tag Event
              </button>
            </div>

            {/* button modal */}
            <div class="modal">
              <div className="modal-content">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setEnterd_gif(e.target.value)}
                  onKeyDown={(e) => clear(e)}
                />

                <div
                  className="gif_content"
                  onClick={() =>
                    (document.getElementsByClassName("modal")[0].style.display =
                      "none")(setPost(""))
                  }
                >
                  {gifdata.map((el) => (
                    <>
                      <img
                        onClick={() => {
                          let obj = {
                            Post_name: post,
                            Gif_url: el.images.fixed_height.url,
                          };
                          setDisplaydata([...displaydata, obj]);
                        }}
                        src={el.images.fixed_height.url}
                        width={"90%"}
                        height={"200px"}
                        alt=""
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
            {/* button modal */}
          </div>
          {/* posts */}
          {gifdata.length !== 0 ? (
            <div className="upload_post_div">
              {displaydata.map((el) => (
                <>
                  <div className="header_div">
                    <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                    <p>{el.Post_name}</p>
                  </div>
                  <div className="gif_container">
                    <img src={el.Gif_url} width={"90%"} height={"90%"} alt="" />
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};