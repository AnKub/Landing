const questions = [
  {
    question: 'How old are you?',
    type: 'select',
    options: ['Under 18', '18-25', '26-35', '36-50', '51+'],
  },
  {
    question: 'What is your main skin concern?',
    type: 'select',
    options: ['Dark circles', 'Puffiness', 'Dryness', 'Fine lines', 'Other'],
  },
  {
    question: 'How often do you use face patches?',
    type: 'select',
    options: ['Daily', 'A few times a week', 'Rarely', 'Never'],
  },
  {
    question: 'What is your skin type?',
    type: 'select',
    options: ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive'],
  },
  {
    question: 'Enter your current sleep hours per night',
    type: 'input',
    inputType: 'number',
    min: 3,
    max: 12,
    placeholder: 'e.g. 7',
  },
  {
    question: 'Enter your target sleep hours per night',
    type: 'input',
    inputType: 'number',
    min: 3,
    max: 12,
    placeholder: 'e.g. 8',
    validate: (value: number, answers: any[]) => value < answers[4],
    error: 'Target sleep hours should be less than current sleep hours',
  },
];
export default questions;