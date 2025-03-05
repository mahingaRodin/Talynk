import type React from "react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Upload, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../../api/hooks/usePosts";

const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const createPost = useCreatePost();

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      setError("Please select a file to upload");
      return;
    }

    if (!title) {
      setError("Please enter a title");
      return;
    }

    try {
      await createPost.mutateAsync({
        file,
        title,
        caption,
        post_category: category,
      });

      // Reset form and navigate to profile page on success
      setFile(null);
      setTitle("");
      setCaption("");
      setCategory("");
      navigate("/user-portal/profile");
    } catch (err) {
      setError("Failed to upload post. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Create a New Post</h1>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
          {file ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(file)}
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
            htmlFor="title"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full bg-gray-800 text-white rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
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
            placeholder="Write a caption for your post"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="w-full bg-gray-800 text-white rounded-lg p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter post category"
          />
        </div>

        <button
          type="submit"
          disabled={createPost.isPending}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {createPost.isPending ? "Uploading..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
