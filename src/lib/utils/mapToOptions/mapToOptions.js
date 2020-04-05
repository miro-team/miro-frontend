export const mapToOptions = (array, filterPredicate = () => true) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const options = array
    .filter(filterPredicate)
    .map((option) => (
      {
        key: option.id,
        value: option.id,
        text: option.name,
      }
    ));

  return options;
};
