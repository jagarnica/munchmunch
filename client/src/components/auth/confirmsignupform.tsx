import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { Text, Flex, Button, useToast, Skeleton } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { getSignUpErrorMessage } from 'utils/aws';
import { FormContainer, FormInput } from 'components/formelements/';
import { confirmationCode } from 'utils/formrules';
import { debounce } from 'lodash';
import { AuthResendSignUpResult } from 'types/';
import { getMediumText } from './utils';

export interface ConfirmPhoneProps {
  userEmailAddress: string;
  callback: (success: boolean) => void | Promise<void>;
  sendCodeImmediately?: boolean;
  signUpResult?: ISignUpResult;
}
/**
 * @name ConfirmSignUpForm
 * @author Jesus Garnica
 * @description Displays a form to verify the account. By default it will automatically
 * send a new code the user but that can be toggled using the prop. If you intend to use
 * this after a sign up, please include the sign up response as a prop in order
 * to properly get the destination of the code.
 * @prop {string} userEmailAddress This used to determine where we are sending the code.
 * @prop {void} callback Calls the function after each attempt at entering the code.
 * It passes in a boolean with the success state.
 * @prop {boolean} sendCodeImmediately By default true. When mounted, the component
 * will send the code to the user. If set to false, this won't happen.
 * @prop {ISignUpResult} signUpResult Needed if you don't want this component to send the
 * code upon mount(ex: Signing up a new user)
 * @returns JSX.Element
 */
export function ConfirmSignUpForm({
  userEmailAddress,
  callback,
  signUpResult,
  sendCodeImmediately = true,
}: ConfirmPhoneProps): JSX.Element {
  // Form hook
  const { register, errors, handleSubmit, watch } = useForm<{ confirmationCode: string }>();

  const toast = useToast();

  /**
   * State for our buttons and whether or not they are in a loading state.
   */
  const [isLoading, setIsLoading] = useState(false);
  const [resentTextLoading, setResentTextLoading] = useState(false);

  /**
   * State for destination attribute and location
   */
  const [destinationAttribute, setDestinationAttribute] = useState<undefined | string>();
  const [destinationLocation, setDestinationLocation] = useState<undefined | string>();

  // Enter Button form checking
  const codeLength = confirmationCode.rules.minLength.value;
  // The code should be the same amount of digits.
  const isButtonDisabled = watch().confirmationCode?.length !== codeLength;

  function setDestinationDetails(codeDeliveryDetails: AuthResendSignUpResult['CodeDeliveryDetails']) {
    setDestinationLocation(codeDeliveryDetails.Destination);
    setDestinationAttribute(codeDeliveryDetails.AttributeName);
  }

  /**
   * useEffect functions for prop 'sendCodeImmediately' and 'signUpResult'
   */
  // Send code when first displayed if sendCodeImmediately is true(which it is by default)
  React.useEffect(() => {
    // Handle the user wanting to resend their text message
    const sendCodeToUser = async () => {
      try {
        const response: AuthResendSignUpResult = await Auth.resendSignUp(userEmailAddress);
        const { CodeDeliveryDetails } = response;
        setDestinationDetails(CodeDeliveryDetails);

        // This means we actually got to send the text
      } catch (e) {
        const errorMessage = getSignUpErrorMessage(e.code, 'There was an issue resending your code');
        toast({
          title: 'Oops!',
          description: errorMessage,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    };
    if (sendCodeImmediately) {
      sendCodeToUser();
    }
  }, [sendCodeImmediately]);

  // Get where the code was sent and to what type
  React.useEffect(() => {
    // Used to know where we sent the code
    if (signUpResult) {
      const { codeDeliveryDetails } = signUpResult;
      setDestinationDetails(codeDeliveryDetails);
    }
  }, [signUpResult]);

  /**
   * handler functions for buttons and events
   */
  // This handles the confirmation portion
  const handleConfirmation = async (data: { confirmationCode: string }) => {
    try {
      setIsLoading(true);
      await Auth.confirmSignUp(userEmailAddress, data.confirmationCode);
      // setIsLoading(false);
      await callback(true);
    } catch (e) {
      setIsLoading(false);
      await callback(false);
    }
  };
  // Give feed back to the user why resending it failed
  const handleResendFailure = debounce(e => {
    const errorMessage = getSignUpErrorMessage(
      e.code,
      'There was an issue resending your code. Please try again later.'
    );
    setResentTextLoading(false);
    toast({
      title: 'Oops!',
      description: errorMessage,
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  }, 1000);
  const handleResendSuccess = debounce(() => {
    toast({
      title: 'Code Resent!',
      description: 'You should get a text with your code very soon!',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
    setResentTextLoading(false);
  }, 1000);
  const handleResendText = debounce(
    async () => {
      try {
        setResentTextLoading(true);

        const response: AuthResendSignUpResult = await Auth.resendSignUp(userEmailAddress);
        const { CodeDeliveryDetails } = response;
        setDestinationDetails(CodeDeliveryDetails);
        // This means we actually got to send the text
        handleResendSuccess();
      } catch (e) {
        // For some reason it failed.
        handleResendFailure(e);
      }
    },
    250,
    {
      leading: true,
      trailing: false,
    }
  );

  const headerText = getMediumText(destinationAttribute, destinationLocation);
  const isLoaded = !!destinationLocation && !!destinationAttribute;
  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleConfirmation)} formTitle="One last step!">
        <Skeleton isLoaded={isLoaded}>
          <Text>{headerText}</Text>
        </Skeleton>
        <Skeleton isLoaded={isLoaded}>
          <Text>Please enter the code received below 👇</Text>
        </Skeleton>
        <FormInput
          elementDetails={confirmationCode}
          ref={register({
            ...confirmationCode.rules,
          })}
          errorText={errors?.confirmationCode?.message}
        />
        <Button isDisabled={isButtonDisabled} isLoading={isLoading} type="submit">
          Confirm
        </Button>
        <Text>{`Didn't receive your code?`}</Text>
        <Flex flexDirection="column">
          <Button
            isLoading={resentTextLoading}
            variant="outline"
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              if (!resentTextLoading) {
                setResentTextLoading(true);
              }
              handleResendText();
            }}
            colorScheme="blue"
          >
            Resend confirmation text
          </Button>
        </Flex>
      </FormContainer>
    </>
  );
}
