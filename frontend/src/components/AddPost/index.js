import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function AddPost( {handleAddPost} ) {
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState("")
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  const handleClick = async() => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
   
    handleAddPost(post, userMetadata);
    setShowModal(false)
  }

  return (
    <>
    <div className="mt-40 " >
   
      <button
        className="bg-amber-400 hover:opacity-50 text-yellow-800 font-bold uppercase text-m px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() =>  {isAuthenticated ? (setShowModal(true) ) : (alert("Please log into your account to send a post"))}}
      >
        Add Post
      </button>
    </div>

      {showModal ? (
        <div>
        <div className="justify-center items-start mt-10 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-amber-400 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-amber-800 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    ADD POST
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ??
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <textarea
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-black
                        bg-amber-400 bg-clip-padding
                        border border-solid border-amber-800
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-black focus:bg-amber-100 focus:border-amber-800 focus:outline-none 
                        placeholder-black
                    "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your Message"
                    onChange={(e) => {setPost(e.target.value)}}>
                    </textarea>
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-amber-800 rounded-b">
                  <button
                    className="bg-yellow-600 text-white font-bold uppercase px-6 py-3 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                    <button
                    className="bg-yellow-600 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      ) : null}
    </>
  );
}  
   
   

