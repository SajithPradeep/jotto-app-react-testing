import CheckPropTypes from "check-prop-types";

/**
 * Returns node(s) with given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of the data-attribute to search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const CheckProps = (component, conformingProps) => {
  const propError = CheckPropTypes(
    component.propTypes,
    conformingProps,
    "props",
    component.Name
  );
  expect(propError).toBe(undefined);
};
