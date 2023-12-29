export const headerLinks = [
    {
      label: 'HOME',
      route: '/',
    },
    {
      label: 'CREATE EVENT',
      route: '/events/create',
    },
    {
      label: 'MY PROFILE',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }