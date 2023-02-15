import React from "react";
import { useState } from "react";
// import moment from 'react'

export default function AddPost( {handleAddPost} ) {
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState("")

  const handleClick =() => {
    handleAddPost(post);
    setShowModal(false)
  }
//   {date_create: moment().format("DD-MM-YYYY")}
  return (
    <>
    <div className="mt-40">
      <button
        className="bg-amber-400 hover:opacity-50 text-yellow-800 font-bold uppercase text-m px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Post
      </button>
    </div>
      {showModal ? (
        <>
        <div
    className="w-5/6 justify-center items-start mt-10 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
            <div className="relative  my-6">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-yellow-500 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    ADD POST
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
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
                        text-white
                        bg-yellow-500 bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-white focus:bg-white focus:border-white focus:outline-none
                    "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    onChange={(e) => {setPost(e.target.value)}}>
                    </textarea>
                    
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-white rounded-b">
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
        
        </>
      ) : null}
    </>
  );
}  
   
        //on click button to display form modal to input new post 
        // create form with inputs for name, surname, post, author_id, created
        // set up states for all the above inputs,  and have event targets on all of these
        // set up for onclick for all states to be updated and handed into a function
        // pass the functions to add post 

        

