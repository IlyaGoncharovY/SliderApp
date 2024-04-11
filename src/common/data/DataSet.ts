export type ButtonTextType = 'Cool!' | 'Awesome!' | 'Try now!';

export type DataSetType = {
  id: string;
  title: string;
  buttonText: ButtonTextType;
};

export const DataSet: DataSetType[] = [
  {
    id: '1',
    title: 'You have',
    buttonText: 'Cool!',
  },
  {
    id: '2',
    title: 'We have',
    buttonText: 'Cool!',
  },
  {
    id: '3',
    title: 'Love',
    buttonText: 'Awesome!',
  },
  {
    id: '4',
    title: 'Self',
    buttonText: 'Awesome!',
  },
  {
    id: '5',
    title: 'Daily life',
    buttonText: 'Awesome!',
  },
  {
    id: '6',
    title: 'How it works',
    buttonText: 'Try now!',
  },
  {
    id: '7',
    title: 'Share birth details',
    buttonText: 'Try now!',
  },
  {
    id: '8',
    title: 'Ask a question',
    buttonText: 'Try now!',
  },
  {
    id: '9',
    title: 'An astrologer will make a prediction',
    buttonText: 'Try now!',
  },
  {
    id: '10',
    title: 'Get your answer',
    buttonText: 'Try now!',
  },
];
