import React from 'react';
import InputField from './addImageDish/InputField';
import SelectField from './addImageDish/SelectField';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Home = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    Swal.fire('Submitted!', JSON.stringify(data, null, 2), 'success');
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          label="Enter your age"
          name="age"
          type="number"
          register={register}
          placeholder="Enter your age"
        />

        <InputField
          label="Enter your height (in cm)"
          name="height"
          type="number"
          register={register}
          placeholder="Enter your height"
        />

        <InputField
          label="Enter your weight (in kg)"
          name="weight"
          type="number"
          register={register}
          placeholder="Enter your weight"
        />

        <SelectField
          label="Gender"
          name="gender"
          register={register}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />

        <SelectField
          label="Activity Level"
          name="activity"
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

        <SelectField
          label="Diet Type"
          name="diet"
          register={register}
          options={[
            { label: 'Vegetarian', value: 'vegetarian' },
            { label: 'Non-Vegetarian', value: 'non-vegetarian' },
          ]}
        />

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

        <SelectField
          label="Meal Type"
          name="mealType"
          register={register}
          options={[
            { label: 'Homemade', value: 'homemade' },
            { label: 'Takeout', value: 'takeout' },
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
