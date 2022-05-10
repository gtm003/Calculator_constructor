export default {
  user: {
    id: null as number | null,
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: null as Date | null,
    email: '',
    avatar: '' as string,
    amountOfTries: 0,
    addresses: [1],
  },
  loginError: '',
  registerError: '',
  isLoading: false,
  errorOccurred: false,
};
