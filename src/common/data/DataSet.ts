export type CoolArrType = {
  id: string;
  title: string;
  description: string;
};

export type AwesomeArrType = {
  id: string;
  title: string;
  description: string;
  anotherDescription: string;
};

export type TryNowArrType = {
  id: string;
  title: string;
};

export type ButtonTitlesType = 'Cool!' | 'Awesome!' | 'Try now!';

export const CoolArr: CoolArrType[] = [
  {
    id: '1',
    title: 'You have',
    description: 'millions of questions...',
  },
  {
    id: '2',
    title: 'We have',
    description: 'answers in the stars!',
  },
];
export const AwesomeArr: AwesomeArrType[] = [
  {
    id: '1',
    title: 'Love',
    description: 'When will I meet my soulmate?',
    anotherDescription: 'When will I get married?',
  },
  {
    id: '2',
    title: 'Self',
    description: 'What I am here to learn in life?',
    anotherDescription: 'Am I on the right path?',
  },
  {
    id: '3',
    title: 'Daily life',
    description: 'What is going to happen next?',
    anotherDescription: 'Any insight for today?',
  },
];

export const TryNowArr: TryNowArrType[] = [
  {
    id: '1',
    title: 'How it works',
  },
  {
    id: '2',
    title: 'Share birth details',
  },
  {
    id: '3',
    title: 'Ask a question',
  },
  {
    id: '4',
    title: 'An astrologer will make a prediction',
  },
  {
    id: '5',
    title: 'Get your answer',
  },
];

export const ButtonTitles: ButtonTitlesType[] = [
  'Cool!',
  'Awesome!',
  'Try now!',
];
