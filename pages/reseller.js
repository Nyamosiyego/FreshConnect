/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "@/components/spinner";
// import { ReactSortable } from "react-sortablejs";
import Header from "@/components/Header";
import  { useSession } from "next-auth/react";

export default function ProductForm({
  _id,
  title: existingTitle,
  email: existingEmail,
  description: existingDescription,
  number: existingNumber,
  images: existingImages,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [email, setEmail] = useState(existingEmail || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [number, setNumber] = useState(existingNumber || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [idnum, setIdnum] = useState("");
  const [kra, setKra] = useState("");

  const router = useRouter();

  const { data: session } = useSession();
  const notify = () =>
    toast("We'll get in touch.", {
      icon: "👏",
      duration: 4000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title: title || session.user.name,
      email: email || session.user.email,
      description,
      number,
      images,
      idnum,
      kra,
    };
    if (_id) {
      //update
      await axios.put("/api/reseller", { ...data, _id });
    } else {
      //create
      await axios.post("/api/reseller", data);
    }
    console.log(data);
    setGoToProducts(true);
  }
useEffect(() => {
  if (goToProducts) {
    const delay = 2000; // Delay in milliseconds (2 seconds in this example)

    const timeoutId = setTimeout(() => {
      router.push("/");
    }, delay);

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the delay completes
  }
}, [goToProducts, router]);


 
  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      console.log("Uploaded Images:", res.data.links);
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }
  



  return (
    <form onSubmit={saveProduct}>
      <Header />
      <Toaster 
      position="top-center"
      reverseOrder={false}
      />
      <div className="w-full mt-6 px-12 md:px-20 lg:px-96 pb-5">
        <h1 className="text-2xl font-bold mb-5">Become a vendor</h1>
        <label>Full names</label>
        <input
          type="text"
          placeholder="Full names"
          value={title || session?.user?.name}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email || session?.user?.email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <label>Photos</label>
        <div className="mb-2 flex flex-wrap gap-1">
          {/* <ReactSortable
            list={images}
            className="flex flex-wrap gap-1"
            setList={updateImagesOrder}
          > */}
            {!!images?.length &&
              images.map((link) => (
                <div
                  key={link}
                  className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
                >
                  <img src={link} alt="" className="rounded-lg" />
                </div>
              ))}
          {/* </ReactSortable> */}
          {isUploading && (
            <div className="h-24 flex items-center">
              <Spinner />
            </div>
          )}
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Add Profile image</div>
            <input type="file" onChange={uploadImages} className="hidden" />
          </label>
        </div>
        <label>Description</label>
        <textarea
          placeholder="Tell me about yourself"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Phone number</label>
        <input
          type="number"
          placeholder="Phone number"
          value={number}
          onChange={(ev) => setNumber(ev.target.value)}
        />
        <label>National ID</label>
        <input
          type="number"
          placeholder="National ID or passport number"
          value={idnum}
          onChange={(ev) => setIdnum(ev.target.value)}
        />
        <label>KRA pin</label>
        <input
          placeholder="KRA pin"
          value={kra}
          onChange={(ev) => setKra(ev.target.value)}
        />
        <button
          type="submit"
          className="bg-black hover:bg-slate-600 text-white px-4 py-1 rounded-sm border border-gray-200 shadow-sm"
          onClick={notify}
        >
          Save
        </button>
      </div>
    </form>
  );
}
