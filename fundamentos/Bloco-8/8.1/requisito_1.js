const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com`}
}