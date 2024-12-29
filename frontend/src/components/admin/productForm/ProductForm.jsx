import './ProductForm.scss';
import Card from '../../card/Card';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadWidget from './UploadWidget';
import { FaTrash } from 'react-icons/fa';

function ProductForm({
  saveProduct,
  product,
  handleInputChange,
  categories,
  isEditing,
  filteredBrands,
  description,
  setDescription,
  files,
  setFiles,
}) {
  const removeImage = image => {
    console.log(image);
    setFiles(files.filter(img => img !== image));
  };

  return (
    <div className='add-product'>
      <UploadWidget files={files} setFiles={setFiles} />

      <Card>
        <br />

        <form onSubmit={saveProduct}>
          <label>Product Images:</label>
          <div className='slide-container'>
            <aside>
              {files.length > 0 &&
                files.map(image => (
                  <div key={image} className='thumbnail'>
                    <img src={image} alt='productImage' height={100} />
                    <div>
                      <FaTrash
                        size={15}
                        className='thumbnailIcon'
                        onClick={() => removeImage(image)}
                      />
                    </div>
                  </div>
                ))}
              {files.length < 1 && (
                <p className='--m'>No image set for this poduct.</p>
              )}
            </aside>
          </div>
          <br />
          <hr />
          <label>Product Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Product name'
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Product Category:</label>
          <select
            name='category'
            value={product?.category}
            onChange={handleInputChange}
          >
            {isEditing ? (
              <option value={product?.category}>{product?.category}</option>
            ) : (
              <option>Select Category</option>
            )}

            {categories.length > 0 &&
              categories.map(cat => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
          </select>

          <label>Product Brand:</label>
          <select
            name='brand'
            value={product?.brand}
            onChange={handleInputChange}
          >
            {isEditing ? (
              <option value={product?.brand}>{product?.brand}</option>
            ) : (
              <option>Select Brand</option>
            )}

            {filteredBrands.length > 0 &&
              filteredBrands.map(brand => (
                <option key={brand._id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
          </select>

          <label>Product Color:</label>
          <input
            type='text'
            name='color'
            placeholder='Color'
            value={product?.color}
            onChange={handleInputChange}
          />

          <label>Regular Price:</label>
          <input
            type='number'
            name='regularPrice'
            placeholder='Regular Price'
            value={product?.regularPrice}
            onChange={handleInputChange}
          />

          <label>Product Price:</label>
          <input
            type='number'
            name='price'
            placeholder='Product Price'
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Product Quantity:</label>
          <input
            type='number'
            name='quantity'
            placeholder='Product Quantity'
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Product Description:</label>
          <ReactQuill
            theme='snow'
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className='--my'>
            <button className='--btn --btn-primary'>Save Product</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

ProductForm.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['clean'],
  ],
};

ProductForm.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'color',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'video',
  'image',
  'code-block',
  'align',
];

export default ProductForm;
