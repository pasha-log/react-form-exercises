import React from "react"; 
import {render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
})

it("matches snapshot", function () {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add new box", function () {
    const {queryByText, getByPlaceholderText, getAllByTestId} = render(<BoxList />)
    const colorInput = getByPlaceholderText("Box Color");
    const widthInput = getByPlaceholderText("Width");
    const heightInput = getByPlaceholderText("Height");
    const btn = queryByText("Add Box");
    expect(getAllByTestId("tester").length).toBe(2);
    fireEvent.change(colorInput, {target: {value: '#8A2BE2'}})
    fireEvent.change(widthInput, {target: {value: '50'}})
    fireEvent.change(heightInput, {target: {value: '50'}})
    fireEvent.click(btn);
    expect(getAllByTestId("tester").length).toBe(3);
})