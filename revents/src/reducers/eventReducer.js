import { createReducer } from '../common/reducerUtil';
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions/EventConstants';

const initialState = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T19:00:00',
    category: 'culture',
    description: 'Description of the event',
    city: 'London, UK',
    venue: 'Tower of London, St. Katharine\'s & Wapping, London',
    hostedBy: 'Bob',
    hostPhotoUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
    visitors: [
      {
        id: 'a',
        name: 'Bob',
        photoUrl: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Mary',
        photoUrl: 'https://randomuser.me/api/portraits/women/42.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Vladivostok Railway Station',
    date: '2018-03-27T14:00:00',
    category: 'culture',
    description: 'Description of the event',
    city: 'Vladivostok, RU',
    venue: 'Vladivostok Railway Station, Vladivostok',
    hostedBy: 'Bob',
    hostPhotoUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
    visitors: [
      {
        id: 'a',
        name: 'Bob',
        photoUrl: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Mary',
        photoUrl: 'https://randomuser.me/api/portraits/women/42.jpg'
      }
    ]
  }
];

const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId.id)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
