import React from 'react'
import { useFormik } from 'formik'

const Profile = () => {

    let initialValues = {
        name: "",
        age: "",
        gender: "",
        phone: "",
        email: ""
    }


    const { handleBlur, errors, touched, handleChange, values, handleSubmit } = useFormik({
        initialValues: initialValues,
        // validationSchema : dataSchema,
        onSubmit: (values, action) => {
            console.log(values)

            action.resetForm()
        }

    })

    return (
        <>
            <div className='my-20  flex flex-col items-center justify-center'>

                <h3 className=' text-[36px] font-semibold my-4 mb-10 text-[#3f2305] '>Profile Data</h3>

                <div className=' px-3 sm:px-14 md:px-28 lg:px-44  flex items-center justify-around gap-x-14 gap-y-5 sm:gap-y-14 flex-wrap '>

                    {/* input 1 */}



                    <input name="name" className='text-[20px] sm:text-[25px] profile-input-border pl-5 py-3'
                        placeholder='Name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur} />


                    {/* input 2 */}
                    <input name="age" className='text-[20px] sm:text-[25px] profile-input-border pl-5 py-3 w-[100px]'
                        placeholder='Age'
                        type="number"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur} />


                    {/* input 3 */}
                    <input name="gender" className='text-[20px] sm:text-[25px] profile-input-border py-3 pl-5 '
                        placeholder='Gender'
                        type="text"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur} />


                 {/* input 4*/}
                 <input name="phone" className='text-[20px] sm:text-[25px] profile-input-border py-3 pl-5'
                        placeholder='Phone'
                        type="number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur} />



                        {/* input 4*/}
                 <input name="email" className='text-[20px] sm:text-[25px] profile-input-border py-3 pl-5 '
                        placeholder='Email'
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                </div>


            </div>
        </>
    )
}

export default Profile