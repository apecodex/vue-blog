export default [
  {
    url: '/api/getComments',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: {
          userinfo: {
            name: '@cname',
            avatar: '@image'
          }
        },
      };
    },
  },
];