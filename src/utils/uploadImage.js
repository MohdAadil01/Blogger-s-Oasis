export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "blog-app");
  formData.append("api_key", process.env.CLOUDNARY_API_KEY);

  const res = await fetch(
    "https://api.cloudnary.com/v1_1/dtqyssrch/image/upload",
    {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "mulitpart/form-data",
      },
    }
  );
  const data = await res.json();
  if (!data) {
    throw new Error("Error in uploading image");
  }
  const imageData = {
    publicId: data.public_id,
    url: data.secure_url,
  };
  return imageData;
};
