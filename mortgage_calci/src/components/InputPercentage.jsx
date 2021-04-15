import React from "react";
import "./InputPercentage.css";

export default function InputPercentage({ id, label, value, onChange }) {
  function formatNumber(n) {
    // remove all non digits
    return n.replace(/\D/g, "");
  }

  function formatDecimal(e, blur) {
    // validates decimal side and puts cursor back in right position.

    // get input value
    let input_val = e.target.value;

    // don't validate empty input
    if (input_val === "") {
      return;
    }

    // original length
    const original_len = input_val.length;

    // initial caret position
    let caret_pos = e.target.selectionStart;

    // check for decimal
    if (input_val.indexOf(".") >= 0) {
      // get position of first decimal
      // this prevents multiple decimals from
      // being entered
      const decimal_pos = input_val.indexOf(".");

      // split number by decimal point
      let left_side = input_val.substring(0, decimal_pos);
      let right_side = input_val.substring(decimal_pos);

      // validate left side of number
      left_side = formatNumber(left_side);

      // validate right side
      right_side = formatNumber(right_side);

      // On blur make sure 2 numbers after decimal
      if (blur === "blur") {
        right_side += "00";
      }

      // Limit decimal to only 2 digits
      right_side = right_side.substring(0, 2);

      // join number by .
      input_val = left_side + "." + right_side;
    } else {
      // no decimal entered
      // remove all non-digits
      input_val = formatNumber(input_val);
      // final formatting
      if (blur) {
        input_val += ".00";
      }
    }

    e.target.value = input_val;

    // put caret back in the right position
    const updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    e.target.setSelectionRange(caret_pos, caret_pos);
  }

  return (
    <div className="input-percentage">
      <label htmlFor={id}>{label}</label>
      <div className="input-group">
        <input
          id={id}
          type="text"
          onKeyUp={formatDecimal}
          onBlur={(e) => formatDecimal(e, true)}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <span className="input-group-addon">%</span>
      </div>
    </div>
  );
}
