export default function useBem(namespace = "") {
  const _applyModifiers = (entity, modifiers) => {
    let result = [];
    result.push(entity);

    if (typeof modifiers === "string") {
      result.push(entity + (modifiers ? "_" + modifiers : ""));
    } else if (modifiers) {
      Object.keys(modifiers).forEach((key) => {
        const value = modifiers[key];
        if (!value) {
          // Skip
        } else if (value === true) {
          result.push(entity + "_" + key);
        } else {
          result.push(entity + "_" + key + "_" + value);
        }
      });
    }

    result = result?.map((cl) => cl);
    return result.join(" ");
  };

  const bemBlock = (modifiers) => _applyModifiers(namespace, modifiers);
  const bemElement = (elementName, modifiers) =>
    _applyModifiers(namespace + "__" + elementName, modifiers);
  const bem = (...names) =>
    Array.prototype.slice
      .call(names)
      .filter((v) => v)
      .join(" ");

  return {
    bem,
    bemBlock,
    bemElement,
  };
}
