export const MOCK_MAIL = [
  // {
  //   datePrimary: 'Expected Today',
  //   dateSecondary: '3:17-3:57pm',
  //   mail: [
  //     {
  //       sender: 'USAA',
  //       subject: 'Tyler Hall',
  //       img: '',
  //     },
  //     {
  //       sender: 'USAA',
  //       subject: 'Tyler Hall',
  //       img: '',
  //     },
  //     {
  //       sender: 'USAA',
  //       subject: 'Tyler Hall',
  //       img: '',
  //     },
  //   ],
  // },
  {
    datePrimary: 'Yesterday',
    dateSecondary: 'May 26',
    mail: [
      {
        sender: 'Mailbox Closed',
        subject: '3 seconds after closed',
        img: '',
        mailboxEvent: 'closed',
        mailboxTime: '3:26pm',
      },
      {
        sender: 'Mailbox Opened',
        subject: '',
        img: '',
        mailboxEvent: 'opened',
        mailboxTime: '3:26pm',
      },
    ],
  },
  {
    datePrimary: '',
    dateSecondary: 'May 6',
    mail: [
      {
        sender: 'Progressive',
        subject: 'Tyler Hall',
        img: 'https://placehold.co/600x400/png',
        important: true,
      },
      {
        sender: 'USAA',
        subject: 'Celina A Hemphill',
        img: 'https://placehold.co/600x400/png',
        important: true,
      },
      {
        sender: 'Marcos Pizza',
        subject: 'Tyler Hall',
        img: 'https://placehold.co/600x400/png',
        important: false,
      },
    ],
  },
];
