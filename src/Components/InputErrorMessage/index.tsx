import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { StyleSpan } from './style';

interface IErrorMessage {
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const ErrorMessage = ({ error }: IErrorMessage) => (
  <>{typeof error === 'string' && <StyleSpan>{error}</StyleSpan>}</>
);

export default ErrorMessage;
