import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userIdAtom, accessTokenAtom } from '../../state/authAtom';
import {
  Mail,
  MapPin,
  Phone,
  UserCheck,
  Pencil,
  MessageCircle,
  Users,
  Image,
} from 'lucide-react';
import avatar from '../Images/avatar.jpg';
import farmer from '../Images/farmer.jpg';
import buyer from '../Images/buyer.jpg';
import pasal from '../Images/market.avif';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

function ProfilePage() {
  const [id] = useAtom(userIdAtom);
  const [access_token] = useAtom(accessTokenAtom);
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const navigate = useNavigate();

  const editProfileSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    address: Yup.string().required('Address is required'),
    contact_number: Yup.string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits')
      .required('Contact number is required'),
    avatar: Yup.mixed().test('fileSize', 'The file is too large', (value) => {
      if (!value) return true; // attachment is optional
      return value[0] && value[0].size <= 5000000; // 5MB
    }),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (!access_token) {
          setError('No token found. Please log in again.');
          return;
        }

        const response = await fetch(`http://localhost:8000/profile/${id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        if (response.status === 401) {
          setError('Token expired or invalid. Please log in again.');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const data = await response.json();
        setUserDetails(data);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('Failed to load user profile');
      }
    };

    fetchUserDetails();
  }, [id, access_token]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file); // Update the state with the new avatar file

      // Prepare form data
      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await fetch(
          `http://localhost:8000/profile/${id}/avatar`,
          {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
            body: formData,
          }
        );

        const data = await response.json();
        if (response.ok) {
          toast.success('Avatar updated successfully');
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            avatar: data.avatar, // Assuming the backend returns the new avatar URL
          }));
        } else {
          toast.error(data.error || 'Failed to update avatar');
        }
      } catch (error) {
        toast.error('Error uploading avatar');
        console.error('Error uploading avatar:', error);
      }
    }
  };

  console.log('avatar Url', avatarFile);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // Use the data passed from the form, not formData directly
      const response = await fetch(`http://localhost:8000/profile/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Use 'data' directly here
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      toast.success('Profile updated successfully!');
      navigate(routes.home);
      const updatedData = await response.json();
      setUserDetails(updatedData);
      setIsEditing(false);
      setFormData(updatedData);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!userDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  const avatarUrl = `http://localhost:8000${userDetails.avatar}`;
  console.log('user details', userDetails.avatar);
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto mt-20">
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <img
                src={
                  avatarFile
                    ? URL.createObjectURL(avatarFile)
                    : userDetails?.avatar
                      ? avatarUrl
                      : avatar
                }
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              {isEditing && (
                <form onSubmit={handleSubmit(handleAvatarChange)}>
                  <Controller
                    name="avatar"
                    control={control} // react-hook-form control
                    render={({ field }) => (
                      <label
                        htmlFor="avatar"
                        className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition cursor-pointer"
                      >
                        <Pencil size={18} />
                        <input
                          id="avatar"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          {...field} // Integrate the file input with react-hook-form
                          onChange={handleAvatarChange}
                        />
                      </label>
                    )}
                  />
                </form>
              )}
            </div>
          </div>

          <div className="pt-20 pb-8 px-4 text-center">
            {isEditing ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto space-y-4"
              >
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700 mb-1 text-left"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    {...register('firstname')}
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="First Name"
                  />
                  {errors.firstname && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 mb-1 text-left"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    {...register('lastname')}
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Last Name"
                  />
                  {errors.lastname && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1 text-left"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register('address')}
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Address"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact_number"
                    className="block text-sm font-medium text-gray-700 mb-1 text-left"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact_number"
                    {...register('contact_number')}
                    value={formData.contact_number}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Contact Number"
                  />
                  {errors.contact_number && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.contact_number.message}
                    </p>
                  )}
                </div>
                <div className="flex gap-4 justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-1">
                  {userDetails.firstname
                    ? userDetails.firstname.charAt(0).toUpperCase() +
                      userDetails.firstname.slice(1)
                    : ''}{' '}
                  {userDetails.lastname
                    ? userDetails.lastname.charAt(0).toUpperCase() +
                      userDetails.lastname.slice(1)
                    : ''}
                </h1>

                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row mt-2">
                    <MapPin className="text-primary" />{' '}
                    <p className="text-gray-600 ml-2">{userDetails.address}</p>
                  </div>
                  <br />
                  <div className="flex flex-row">
                    <Users className="text-primary" />{' '}
                    <p className="text-gray-600 mb-4 ml-2">
                      {userDetails.usertype
                        ? userDetails.usertype.charAt(0).toUpperCase() +
                          userDetails.usertype.slice(1)
                        : ''}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto px-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Mail className="text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{userDetails.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Phone className="text-primary" />
                    <div className="text-left">
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">
                        {userDetails.contact_number}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleEdit}
                  className="mt-8 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2 mx-auto"
                >
                  <Pencil size={18} />
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
