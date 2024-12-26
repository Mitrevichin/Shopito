import { useState } from 'react';
import Card from '../../card/Card';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_url = 'https://api.cloudinary.com/v1_1/dy1ppo3wm/image/upload';

function UploadWidget({ files, setFiles }) {
  // State for showing the selected images to the user
  const [selectedImages, setSelectedImages] = useState([]);
  // State for uploading images to cloudinary
  const [images, setImages] = useState([]);

  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  function addImages(e) {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const UrlImagesArray = selectedFilesArray.map(file =>
      URL.createObjectURL(file)
    );

    setImages(prevImages => prevImages.concat(selectedFilesArray));
    setSelectedImages(prevImages => prevImages.concat(UrlImagesArray));

    e.target.value = '';
  }

  function removeImage(image) {
    const imageIndex = selectedImages.indexOf(image);

    setSelectedImages(selectedImages =>
      selectedImages.filter(img => img !== image)
    );

    setImages(images => images.filter((img, i) => i !== imageIndex));
    URL.revokeObjectURL(image);
  }

  function uploadImages() {
    setUploading(true);

    let imageUrls = [];
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      let file = images[i];

      formData.append('file', file);
      formData.append('upload_preset', upload_preset);
      formData.append('folder', 'shopitoApp');

      fetch(cloud_url, {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          imageUrls.push(data.secure_url);
          setProgress(imageUrls.length);

          if (imageUrls.length === images.length) {
            setFiles(prevFiles => prevFiles.concat(imageUrls));
            setUploading(false);
            console.log(files);
            toast.success('Image upload complete');
            setImages([]);
            setSelectedImages([]);
            setProgress(0);
          }
        })
        .catch(error => {
          setUploading(false);
          toast.error(error.message);
          console.log(error);
        });
    }
  }

  return (
    <div>
      <Card cardClass={'formcard group'}>
        <label className='uploadWidget'>
          <AiOutlineCloudUpload size={35} />
          <br />
          <span>Upload up to 5 images</span>
          <input
            type='file'
            name='images'
            onChange={addImages}
            multiple
            accept='image/png image/jpeg image/webp'
          />
        </label>
        <br />

        {selectedImages.length > 0 && selectedImages.length > 5 ? (
          <p className='error'>
            You can&apos;t upload more than 5 images! <br />
            <span>
              Please remove&nbsp;
              {selectedImages.length - 5} of them
            </span>
          </p>
        ) : (
          <div className='--center-all'>
            <button
              className='--btn --btn-danger --btn-large'
              onClick={uploadImages}
            >
              Upload Image
            </button>
          </div>
        )}

        {/* View Selected Images */}
        <div className={selectedImages.length > 0 ? 'images' : ''}>
          {selectedImages !== 0 &&
            selectedImages.map((image, i) => {
              return (
                <div key={image} className='image'>
                  <img src={image} width={200} alt='Product Image' />
                  <button className='-btn' onClick={() => removeImage(image)}>
                    <FaTrash size={25} />
                  </button>
                  <p>{i + 1}</p>
                </div>
              );
            })}
        </div>
      </Card>
    </div>
  );
}

export default UploadWidget;
