import { createCategory, deleteCategory, editCategory } from '@/service/service';
import { INITIAL_CATEGORY_STATE } from '@/app/categories/page';
import { UploadButton } from 'react-uploader';
import { Uploader } from 'uploader';

const CategoryForm = ({ category, setCategory, onCategoryCreated }) => {
    const uploader = Uploader({
        apiKey: process.env.UPLOAD_IO_API_KEY || 'public_12a1yQuCfLGeXbSMVkpaB4TNjbt3'
    }); // Your real API key.

    const handleOnChange = (e) => {
        const key = e.target.id;
        const value = key === 'showOnMenu' ? e.target.checked : e.target.value;
        setCategory((prev) => ({ ...prev, [key]: value }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        console.log(category);

        let response;
        if (category.id) {
            response = await editCategory(category);
        } else {
            response = await createCategory(category);
        }

        if (response.ok) {
            setCategory(INITIAL_CATEGORY_STATE);
            onCategoryCreated();
        }
    };

    const handleUploadComplete = (files) => {
        if (files.length > 0) {
            setCategory((prev) => ({ ...prev, image: files[0].fileUrl }));
        }
    };

    const handleDeleteCategory = async (selectedCategory) => {
        if (selectedCategory.id) {
            const response = await deleteCategory(selectedCategory.id);

            if (response.ok) {
                setCategory(INITIAL_CATEGORY_STATE);
                onCategoryCreated();
            }
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleOnSubmit}>
            <div className="flex flex-col">
                <label htmlFor="name">Name*</label>
                <input
                    className="py-2 px-1 rounded"
                    autoFocus
                    type="text"
                    id="name"
                    placeholder="Product Name"
                    required
                    value={category.name}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="description">Description</label>
                <textarea
                    rows={5}
                    className="py-2 px-1 rounded"
                    id="description"
                    placeholder="Product Description"
                    value={category.description}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="order">Order*</label>
                <input
                    className="py-2 px-1 rounded"
                    type="number"
                    id="order"
                    placeholder="Product Order"
                    required
                    value={category.order}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="image">Image*</label>
                <UploadButton
                    uploader={uploader}
                    options={{ multi: false }}
                    onComplete={handleUploadComplete}
                >
                    {({ onClick }) => <button onClick={onClick}>Upload an Image...</button>}
                </UploadButton>
            </div>

            <div className="flex">
                <label htmlFor="showOnMenu">Show on Menu</label>
                <input
                    type="checkbox"
                    id="showOnMenu"
                    checked={category.showOnMenu}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex gap-2">
                <button className="w-fit px-4 py-2 rounded mt-6" type="submit">
                    Save
                </button>
                <button
                    className="w-fit px-4 py-2 rounded mt-6"
                    type="button"
                    onClick={() => setCategory(INITIAL_CATEGORY_STATE)}
                >
                    Clear
                </button>
                <button
                    className="w-fit px-4 py-2 rounded mt-6"
                    type="button"
                    onClick={() => handleDeleteCategory(category)}
                >
                    Delete
                </button>
            </div>
        </form>
    );
};

export default CategoryForm;
