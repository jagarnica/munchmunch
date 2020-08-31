import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';

/**
 * @name formatToAWSPhoneNumber
 * @param {string} phoneNumber *Required* This is the phone number (as a string!) that will
 * be processed and returned in a format optimized for AWS.
 * @param {CountryCode} country This is the country that number will be formatted
 * for. The default is US.
 * @returns {string | null} Returns the number formatted or null if there was an issue.
 */
export function formatToAWSPhoneNumber(phoneNumber: string, country: CountryCode = 'US'): string | null {
  return parsePhoneNumberFromString(phoneNumber, country)?.formatInternational().replace(/\s/g, '') || null;
}

/**
 * @function getSignUpErrorMessage
 * @description Gets a more user friendly error message to display to users
 * during the sign up process.
 * @param {string} code This is the code we get back from aws
 * @returns {string} Returns a more descriptive and friendly error message.
 */
export function getSignUpErrorMessage(code?: string): string {
  switch (code) {
    case 'UsernameExistsException':
      return 'An account with that email already exists.';
    default:
      return 'There was an issue creating your account.';
  }
}
