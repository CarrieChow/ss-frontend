/*
 * 1. Implement the React.Component, <Input />
 *   - It should allow the user to type text in.
 *   - Style as you wish.
 *
 * 2. Implement the React.Component, <Output />
 *   - It should show the user the computed result from calling 'isClosed()'.
 *   - Style as you wish.
 *
 * 3. Implement the React.Component, <Button />
 *   - It should handle user's click, which will call 'isClosed()'
 *   - It should handle user's pressing 'Enter', which will also call 'isClosed()'
 *
 * 4. Implement `isClosed()`
 *   - Given a string input, `str`, write a function that returns a boolean if the `str`
 *     is properly "closed". This means we have 2 types of reserved characters:
 *     1. Opening Character, "^"
 *     2. Closing Character, "$"
 *     - The function needs to check that whenever an Opening Character appears, then a Closing
 *     Character comes after it.
 *     - Likewise, whenever a Closing Character appears, means a corresponding
 *     Opening Character must have appeared previously.
 *     - It should handle nesting, so "^^$$" should return `true`.
 *     - It should ignore other characters that is not "^" or "$".
 *   - Examples:
 *     - "^$" => true
 *     - "$^" => false
 *     - "^^$$" => true
 *     - "^$$^" => false
 *     - "^$^$" => true
 *     - "^123^abc$$" => true
 */
import React from 'react';

export function Input(props) {
  return (
    <input name="description" type="text" value={this.state.value} />
  );
}

export function Button(props) {
  return (
    <button type="button" onClick="isClosed(props.state.value)">Compute Result</button>
  );
}

export function Output(props) {
  return (
    <div>Output</div>
  );
}

export function isClosed(str) {
  if (str.charAt(0) === "^" && str.charAt(str.length-1) == "$") {
    return true;
  } else {
    return false;
  }
}

export class ComputeIO extends React.Component {
  render() {    
    return (
      <section>
        <Input />
        <Button />
        <Output />
      </section>
    );
  }
}
