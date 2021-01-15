import { AuthForgotPasswordResult } from 'types';
import { Auth } from 'aws-amplify';

/**
 * @function getMediumText Util function to parse what message to display to
 *  the user regarding where the code was sent
 * @param {string} medium Should be 'email' or 'text' if passed in.
 * @param {string} location The location as string where the code was sent in a hidden state.
 */
export function getMediumText(medium?: string, location?: string): string {
  return medium && location
    ? `We sent you a verification code to the ${medium} you entered at ${location}.`
    : `We sent you a code to either your phone or email.`;
}
/**
 * @function authForgotPassword Sends a code to the user. Then it runs the callback
 * function, passing in the attempt result, the email used, and the response or error code.
 * @author Jesus Garnica
 * @param email
 * @param callback
 */
export async function authForgotPassword(
  email: string,
  callback: (success: boolean, username: string, response: string | AuthForgotPasswordResult) => void
): Promise<void> {
  try {
    const response: AuthForgotPasswordResult = await Auth.forgotPassword(email);
    callback(true, email, response);
  } catch (e) {
    const { code } = e;
    callback(false, email, code);
  }
}
