import styled from 'styled-components';

export const FieldsetStyle = styled.fieldset`
  padding: 15px;

  border: 3px solid var(--color-green-primary);

  border-radius: 8px;

  background-color: var(--gray-0);

  color: var(--gray-2);

  legend {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
    color: var(--gray-2);

    padding: 5px;
  }
`;

export const FieldsetCheckbox = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;

  gap: 15px;

  padding: 15px;

  border: 3px solid var(--color-green-primary);

  border-radius: 8px;

  background-color: var(--gray-0);

  color: var(--gray-2);

  .container {
    display: block;
    position: relative;
    padding-left: 15px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 17px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: var(--color-yellow-primary);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const FieldsetRadio = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 90px;

  gap: 15px;

  padding: 15px;

  border: 3px solid var(--color-green-primary);

  border-radius: 8px;

  background-color: var(--gray-0);

  color: var(--gray-2);

  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: var(--color-yellow-primary);
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;
