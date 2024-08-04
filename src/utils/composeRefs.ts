import { MutableRefObject, Ref } from 'react';

type PossibleRef<T> = Ref<T> | undefined;

/**
 * Composes multiple ref callbacks into a single callback function. When the returned 
 * function is called with a node, it sets the node on all provided refs.
 *
 * @param {...PossibleRef<T>[]} refs - Multiple ref callbacks or ref objects to be composed.
 * @returns {(node: T) => void} - A single callback function that sets the node on all refs.
 *
 * @template T - The type of the node that will be referenced.
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

/**
 * Sets the value of a ref, either by calling a ref callback or by assigning to a ref object.
 *
 * @param {PossibleRef<T>} ref - The ref to be set. Can be a callback function or a ref object.
 * @param {T} value - The value to set on the ref.
 *
 * @template T - The type of the value to be set.
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<T>).current = value;
  }
}

export {
  composeRefs,
  setRef
};