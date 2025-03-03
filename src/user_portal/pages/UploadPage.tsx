import type React from "react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Upload, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically upload the file and post data to your backend
    console.log("Uploading:", { file, caption, hashtags });
    // Reset form after submission
    setFile(null);
    setCaption("");
    setHashtags("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
          {file ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(file) || "/placeholder.svg"}
                alt="Preview"
                className="max-h-64 mx-auto"
              />
              <button
                type="button"
                onClick={() => setFile(null)}
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label className="cursor-pointer">
              <Upload className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <span className="text-gray-400">
                Click to upload or drag and drop
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*,video/*"
              />
            </label>
          )}
        </div>
        <div>
          <label
            htmlFor="caption"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Caption
          </label>
          <textarea
            id="caption"
            rows={3}
            className="w-full bg-gray-800 text-white rounded-lg p-2"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="hashtags"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Hashtags
          </label>
          <input
            type="text"
            id="hashtags"
            className="w-full bg-gray-800 text-white rounded-lg p-2"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            placeholder="Separate hashtags with spaces"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
