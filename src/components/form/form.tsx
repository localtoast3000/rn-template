import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { View, ViewProps } from 'react-native';
import { useForm, Controller, FieldErrors } from 'react-hook-form';

/**
 * Props interface for the `Form` component.
 */
interface FormProps extends ViewProps {
  /**
   * Default values for the form fields.
   */
  defaultValues: { [key: string]: string };

  /**
   * Callback function invoked when the form is submitted.
   * @param submitResults An object containing the form field values and any validation errors.
   */
  onSubmit: (submitResults: {
    values: { [key: string]: string };
    errors: FieldErrors;
  }) => void;
}

/**
 * A customizable form component that handles form inputs using `react-hook-form`.
 * @param {FormProps} props - The props object that configures the form.
 * @returns {React.ReactElement} A React component that represents the form.
 */
export default function Form({
  defaultValues = {},
  onSubmit,
  children,
  ...props
}: FormProps): React.ReactElement {
  // Initialize form state and methods using `react-hook-form`
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  /**
   * Recursively maps through the children elements and handles form rendering logic.
   * @param {React.ReactElement | React.ReactNode} child - The child element to process.
   * @returns {React.ReactElement | React.ReactNode} The processed child element.
   * @throws {Error} Throws an error if the child is not a valid React element.
   */
  const mapChildrenRecursively = (
    child: ReactElement | ReactNode
  ): ReactElement | ReactNode => {
    if (!isValidElement(child)) {
      throw new Error('Form rendering error: Invalid child element given');
    }

    if (child.props.wrapper && child.props.children) {
      // Handle rendering for children with a wrapper prop
      const { children: nestedChildren, ...childProps } = child.props;
      return React.createElement(
        child.type,
        { ...childProps },
        React.Children.map(nestedChildren, (nestedChild: ReactElement) =>
          mapChildrenRecursively(nestedChild)
        )
      );
    } else if (child.props && child.props.submitter) {
      // Handle rendering for the submitter element
      return React.cloneElement(child, {
        onPress: handleSubmit((values) => {
          // Trigger the form submission when the submitter is pressed
          onSubmit({ values, errors });
        }),
        ...child.props,
      });
    } else if (child.props && child.props.name) {
      // Handle rendering for form fields with a name prop
      return (
        <Controller
          key={child.props?.name}
          name={child.props?.name}
          control={control}
          rules={child.props.rules}
          render={({
            field: { onChange, ref, ...otherFieldProps },
            fieldState: { error },
          }) =>
            React.createElement(child.type, {
              ...{
                ...child.props,
                onChangeText: onChange,
                ...otherFieldProps,
                register,
                error,
              },
            })
          }
        />
      );
    } else {
      // Return the child as is if it doesn't fall into any of the above cases
      return child;
    }
  };

  return (
    // Render the form wrapped in a View component with provided props and className
    <View
      {...props}
      className={`${props.className}`}>
      {/* Map through the children and apply the form rendering logic */}
      {React.Children.map(children, (child: ReactElement | ReactNode) =>
        mapChildrenRecursively(child)
      )}
    </View>
  );
}
