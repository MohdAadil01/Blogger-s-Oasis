export const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "blog-app");
    formData.append("api_key", "937947862462978");

    const res = await fetch(
      "https://api.cloudnary.com/v1_1/blog-app/image/upload",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (!res.ok) {
      console.log("Error in uploading image to cloud.");
      throw new Error("Error in uploading image");
    }
    const data = await res.json();

    const imageData = {
      publicId: data.public_id,
      url: data.secure_url,
    };
    return imageData;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};
