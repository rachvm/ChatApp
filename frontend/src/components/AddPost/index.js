import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function AddPost() {
    return (
        <>
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-left text-white hover:bg-slate-900 focus:outline-none dark:hover:bg-slate-900">
                <PlusCircleIcon  id="add" className="h-6 w-6 text-yellow-500"/>
                <label className="ml-2 text-m font-medium text-yellow-500">Add Post</label>
            </button>
            <div>
                <input placeholder="author_id"></input>
                <input placeholder="name"></input>
                <input placeholder="post"></input>
                <input placeholder="surname"></input>
            </div>
           


        </>
    )
}