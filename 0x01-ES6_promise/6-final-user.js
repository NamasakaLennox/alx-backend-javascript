import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo]).then((res) => {
    const output = [];
    res.forEach((out) => {
      if (out.status === 'fulfilled') {
        output.push({ status: out.status, value: out.value });
      } else {
        output.push({ status: out.status, value: `${out.reason}` });
      }
    });
    return output;
  });
}
