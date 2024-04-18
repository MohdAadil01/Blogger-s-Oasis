import {
  Alert,
  Button,
  FileInput,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

// import ReactQuill from "react-quill";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../utils/uploadImage";

function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
  });
  const [file, setFile] = useState(null);
  const editor = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setFormData({ ...formData, title: e.target.value });
    }
    if (e.target.id === "category") {
      setFormData({ ...formData, category: e.target.value });
    }
  };

  const uploadImageHandler = async (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];
    if (selectedFile.size > 2000000) {
      setErrorMessage("File size should be less than 2mb");
    } else {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageData = await uploadImage(file);
    console.log(data);
    console.log(formData);
    console.log(file);
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            value={formData.title}
            onChange={handleChange}
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData.category}
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <TextInput type="file" onChange={uploadImageHandler} />
        </div>
        <JoditEditor
          ref={editor}
          value={formData.content}
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;
