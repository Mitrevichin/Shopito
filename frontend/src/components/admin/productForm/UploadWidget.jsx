import { useState } from 'react';
import Card from '../../card/Card';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

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

        {/* View Selected Images */}
        <div className={selectedImages.length > 0 ? 'images' : ''}>
          {selectedImages !== 0 &&
            selectedImages.map((image, i) => {
              return (
                <div key={image} className='image'>
                  <img src={image} width={200} alt='Product Image' />
                  <button className='-btn'>
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
