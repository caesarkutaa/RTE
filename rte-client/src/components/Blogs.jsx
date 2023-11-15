import { React, useState } from "react";
import axios from "../API/axios";
const blog_URL = "/news/";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Blogs = () => {
  const [success, setSuccess] = useState("");
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [errMsg, setErrMsg] = useState('');

  const token = cookies.get("Token");

  function handleFile(event) {
    setFile(event.target.files[0]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("body", body);
    data.append("image", file);
    console.log("data", data);
    try {
      const response = await axios.post(blog_URL, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      });
     
      setBody('')
      setTitle('')
      setDescription('')
      setFile()
      setSuccess('blog uploaded successfully')
    } catch (error) {
      setErrMsg('Blog upload Failed, try again')
    }
  }
  return (
    <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
      <div className="bg-blue-800 px-10 py-10 text-center text-white">
        <p className="font-serif text-2xl font-semibold tracking-wider">
          Add News
        </p>
      </div>
      <p className='text-center'  style={{color:"red"}}>{errMsg}</p>
      <p className='text-center' style={{color:"green"}}>{success}</p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 px-8 py-10">
          <label className="block" for="name">
            <p class="text-gray-600">News Title</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter News title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="block" for="name">
            <p className="text-gray-600">News Description</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter news description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label className="block" for="name">
            <p className="text-gray-600">News Body</p>
            <textarea
              className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter the blog details or main body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </label>
          <label className="shadow-blue-100 mt-6 block rounded-full border bg-white px-4 py-4 font-normal text-blue-500 shadow hover:bg-blue-50">
            <input className="" type="file" name="file" id="" onChange={handleFile} required />
            browse
          </label>
          <button className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Blogs;
