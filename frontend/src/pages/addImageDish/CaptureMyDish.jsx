import React from 'react'

import { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import { useAddDishMutation } from '../../redux/features/dish/foodApi'


import { useForm } from 'react-hook-form'
// import { useAdddishMutation } from '../../../redux/features/books/booksApi';
import Swal from 'sweetalert2';


const CaptureMyDish = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setimageFile] = useState(null);
    const [addDish, { isLoading, isError }] = useAddDishMutation();
    const [imageFileName, setimageFileName] = useState('')


    const onSubmit = async (data) => {


        const formData = new FormData();
        formData.append('foodName', data.title);
        formData.append('file', imageFile);

        // In formData ra console để kiểm tra dữ liệu trước khi gửi
        console.log('FormData:', formData);

        // Đoạn này có thể comment lại để test mà không cần API
        try {
            await addDish(formData).unwrap();
            Swal.fire({
                title: "Dish added",
                text: "Your dish is uploaded successfully!",
                icon: "success",
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error',
                text: 'Failed to add dish. Please try again.',
                icon: 'error',
            });
        }

        // Test kết quả của FormData
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimageFile(file);
            setimageFileName(file.name);
        }
    }

    return (
        <div>
            <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Dish</h2>

                {/* Form starts here */}
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    {/* Reusable Input Field for Title */}
                    <InputField
                        label="Title"
                        name="foodName"
                        placeholder="Enter dish title"
                        register={register}
                    />

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Dish Image</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
                        {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default CaptureMyDish

