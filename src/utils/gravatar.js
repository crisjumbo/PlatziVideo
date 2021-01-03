import md5 from 'md5';

/* md5 can read @ so we encode it */
const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;
