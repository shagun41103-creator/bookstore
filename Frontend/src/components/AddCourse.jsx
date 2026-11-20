
import React, { useState } from "react";
import axios from "axios";

function AddCourse() {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [message, setMessage] = useState("");

    // Image select function
    const handleImage = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    // Form submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();

        formData.append("name", name);
        formData.append("image", image);

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/course/add`,
                formData
            );

            setMessage(res.data.message);
            console.log(res.data);

        } catch (error) {
            console.log(error);
            setMessage("Image upload failed!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Upload Image
                </h2>

                {/* Name Field */}
                <label className="block mb-2 font-semibold">
                    Name
                </label>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-2 rounded mb-4"
                    required
                />

                {/* Image Picker */}
                <label className="block mb-2 font-semibold">
                    Choose Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="w-full border p-2 rounded mb-4"
                    required
                />

                {/* Image Preview */}
                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded mb-4"
                    />
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                >
                    Upload Image
                </button>

                {message && (
                    <p className="mt-4 text-center">
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}

export default AddCourse;
