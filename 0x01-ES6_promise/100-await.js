import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto().then((res) => res);
    const user = await createUser().then((res) => res);

    return ({ photo, user });
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
