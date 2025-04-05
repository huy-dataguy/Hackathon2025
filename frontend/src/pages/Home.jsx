import React from 'react';
import InputField from './addImageDish/InputField';
import SelectField from './addImageDish/SelectField';
import { useForm } from 'react-hook-form';
import { useAddInforMutation } from '../redux/features/dish/foodApi';

import Swal from 'sweetalert2';

const Home = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [addInfor, { isLoading, isError }] = useAddInforMutation();


  
  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      age: Number(data.age),
      height: Number(data.height),
      weight: Number(data.weight),
      sportActivity: Number(data.sportActivity),
      isVegetarian: Number(data.isVegetarian),
      homeCook: Number(data.homeCook),
    };
  
    try {
      console.log(formattedData)
      const res = await addInfor(formattedData).unwrap(); 
      Swal.fire('Success', 'Data has been submitted!', 'success');
      reset(); 
      console.log(res);
    } catch (error) {
      Swal.fire('Error', 'Failed to submit data', 'error');
      console.error(error);
    }
  };
  


  return (
    <div className="max-w-sm mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* //ok */}
        <input
          label="Enter your age"
          name="email"
          type="email"
        />
        {/* ok */}
        <InputField
          label="Enter your age"
          name="age"
          type="number"
          register={register}
          placeholder="Enter your age"
        />

        {/* ok */}
        <InputField
          label="Enter your height (in cm)"
          name="height"
          type="number"
          register={register}
          placeholder="Enter your height"
        />
{/* ok */}
        <InputField
          label="Enter your weight (in kg)"
          name="weight"
          type="number"
          register={register}
          placeholder="Enter your weight"
        />

        {/* <SelectField
          label="Gender"
          name="gender"
          register={register}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        /> */}


{/* ok */}
        <SelectField
          label="Activity Level"
          name="sportActivity"
          register={register}
          options={[
            { label: '1/7', value: '1' },
            { label: '2/7', value: '2' },
            { label: '3/7', value: '3' },
            { label: '4/7', value: '4' },
            { label: '5/7', value: '5' },
            { label: '6/7', value: '6' },
            { label: '7/7', value: '7' },
          ]}
        />
{/* ok */}
        <SelectField
          label="Diet Type"
          name="isVegetarian"
          register={register}
          options={[
            { label: 'Vegetarian', value: '1' },
            { label: 'Non-Vegetarian', value: '0' },
          ]}
        />

{/* ok */}
        <SelectField
          label="Taste Preference"
          name="taste"
          register={register}
          options={[
            { label: 'Sweet', value: 'sweet' },
            { label: 'Salty', value: 'salty' },
            { label: 'Spicy', value: 'spicy' },
            { label: 'Sour', value: 'sour' },
          ]}
        />
{/* oik */}
        <SelectField
          label="Meal Type"
          name="homeCook"
          register={register}
          options={[
            { label: 'Homemade', value: '1' },
            { label: 'Takeout', value: '0' },
          ]}
        />

        <div className="text-center mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
